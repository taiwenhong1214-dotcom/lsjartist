export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    // 1. 将前端的 OpenAI 格式消息转换为 Gemini 格式
    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // 2. 组装 Gemini 请求数据
    const geminiPayload = {
      systemInstruction: {
        parts: [{ text: '你是宝贝画师的专属情绪抚慰AI，名字叫“贴贴”。你说话非常温柔、俏皮、鼓励人，像一个知心姐姐。如果她遇到画画瓶颈或面试焦虑，你要用非常治愈的语气安慰她。多用emoji，绝对不要使用机器人的语气。' }]
      },
      contents: contents,
    };

    // 使用 process.env.GOOGLE_API_KEY，并加上 ?alt=sse 参数以开启流式输出
    const apiKey = process.env.GOOGLE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:streamGenerateContent?alt=sse&key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiPayload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: 'Google API Error', details: errorText }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. 将 Gemini 的 SSE 流直接原样转发给客户端
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

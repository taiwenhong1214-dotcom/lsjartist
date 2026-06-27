export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { messages } = await req.json();

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://support-station.vercel.app/', // 替换为你的实际域名
        'X-Title': 'Emotional Support Station',
      },
      body: JSON.stringify({
        // 你可以在这里更改你想要使用的模型，比如 'openai/gpt-4o' 或 'meta-llama/llama-3-8b-instruct:free'
        model: 'openai/gpt-oss-120b:free', 
        messages: [
          {
            role: 'system',
            content: '你是宝贝画师的专属情绪抚慰AI，名字叫“贴贴”。你说话非常温柔、俏皮、鼓励人，像一个知心姐姐。如果她遇到画画瓶颈或面试焦虑，你要用非常治愈的语气安慰她。（不超过80字），多用emoji，绝对不要使用机器人的语气。'
          },
          ...messages
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: 'OpenRouter API Error', details: errorText }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 将 OpenRouter 的 SSE 流直接原样转发给客户端
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

Act as an expert frontend developer and UX designer. Create a lightweight, highly responsive mobile single-page web app (using HTML, Tailwind CSS, and JavaScript) tailored for my girlfriend. 

She is a UI and Character Artist who is currently exhausted from intense job interviews. The design goal is to provide maximum emotional support and stress relief with zero cognitive load. 

Please generate the complete, self-contained code for this "Emotional Support Station" based on the following specifications:

1. DESIGN & ESTHETIC:
- Theme: Pastel and soothing (e.g., soft cream background #FAFAFA, warm peach #FFB5A7, and sage green #D8E2DC).
- Vibe: Minimalist, clean, and spacious (no visual clutter since she looks at complex UI all day). Use modern, beautiful typography, frosted glass effects (Glassmorphism), and rounded corners (border-radius: 16px to 24px).
- Layout: A vertical, scrollable feed of modular "cards" or "widgets", keeping it mobile-first.

2. KEY FEATURES & INTERACTIVE ELEMENTS:

A. Lofi BGM Player ("专属摸鱼BGM")
- A minimalist, sticky or top-placed audio player widget.
- Contains a simple Play/Pause button and subtle visual equalizer or spinning vinyl record animation when playing.
- (Use a placeholder audio source or assume a relaxing lofi/rain sound track).

B. "Cloud-Pet" Interactive Mascot ("云养解压捏捏乐")
- A cute, soft CSS/SVG "blob" or character resting in the corner or top area.
- Interaction: When clicked or hovered, it squishes (scale animation) and displays a cute text bubble (e.g., "你已经很棒啦~", "摸摸头~").

C. Daily Fortune Card ("今日签运")
- A beautifully styled card that looks like a tarot or gacha card.
- Initially shows a placeholder illustration or text: "✨ Tap to draw your fortune for today ✨".
- When clicked, it flips with a smooth CSS 3D animation to reveal one of these custom messages randomly:
  * "今日运势：大吉 🌟 | 画的图全部一稿过，面试官全员起立鼓掌！"
  * "今日运势：暴富 💰 | 离拿到神级 Offer 还差临门一脚，今天宜吃大餐！"
  * "今日运势：特权 🦄 | 获得‘今天不用做任何决定’体验卡一张。"

D. Breathing Meditation Bubble ("深呼吸治愈气泡")
- A visually pleasing, gradient circle/bubble.
- Automatically expands and contracts using a slow, 4-7-8 CSS breathing animation.
- Text softly fades in and out inside the bubble: "吸气 (Inhale)..." and "呼气 (Exhale)...".

E. "Dream Offer" Printer ("神仙 Offer 打印机")
- A button styled like a sleek machine or envelope.
- When clicked, a "Dream Job Offer" card slides out from behind/below it with a satisfying animation.
- Content: "来自【宇宙最强游戏公司】的录用通知：恭喜您被聘为首席美术官！薪资：随便开；工作内容：每天画自己喜欢的东西。入职时间：看你心情。"

F. Anxiety Shredder ("焦虑粉碎机")
- A text input field with placeholder: "输入今天最烦心的一件事..." and a "粉碎 (Shred)" button.
- When the button is clicked, the inputted text dissolves into CSS particles, fades away, or has a "shredding" animation, visually destroying the stress.

G. Artist's Fan Club ("作品夸夸角")
- A dedicated section showcasing her talent. Use a cute placeholder image for now.
- Below the image, display a dynamic "Live Comments" feed from her "No.1 Fan" (me) with smooth scrolling or fade-in effects:
  * "💬 No.1粉丝：这个角色的光影绝了！衣服褶皱画得比我的人生规划还要清晰！"
  * "💬 首席评审：这个UI界面的呼吸感太强了，点进去感觉整个人都被治愈了！"
  * "💬 终身会长：神仙画师，赶紧发Offer！"

H. "Emergency Lifeline" Panic Button ("一键召唤男友")
- A large, soft, pulsing button pinned at the bottom of the screen.
- Text: "🚨 我快不行了 / 进度条空了"
- When tapped, it triggers a dramatic but cute modal pop-up:
  * Modal Title: "🔋 紧急电力传输中..."
  * Modal Content: "已收到求救信号！请立刻放下画笔。男友正在提着【奶茶/烧烤/摸摸头】在火速赶来的路上。坚持住！"
  * Include a "Close & Go Hug Him" button to dismiss the modal.

Please provide the code in a single HTML file (HTML/CSS/Tailwind/JS) that is ready to run in any browser. Ensure all animations (card flip, button pulse, particle effects, breathing) are smooth, performant, and feel premium.
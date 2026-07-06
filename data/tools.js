// AI 工具庫資料檔 —— 每週由 Cowork 排程自動更新（新工具加到對應分類，weekly 區塊放每週精選）
window.SITE_TOOLS = {
  lastUpdated: "2026-07-06",
  categories: [
    { id: "writing", name: "✍️ 寫作與文案", tools: [
      { name: "Claude", price: "免費/付費", desc: "長文寫作、文件分析、繁中品質佳；Projects 可建立個人知識庫", fit: "文書工作、報告撰寫", link: "https://claude.ai" },
      { name: "ChatGPT", price: "免費/付費", desc: "泛用型 AI 助手，GPTs 商店生態最大", fit: "日常問答、腦力激盪", link: "https://chatgpt.com" },
      { name: "Notion AI", price: "付費", desc: "直接在 Notion 筆記中寫作、摘要、翻譯", fit: "已使用 Notion 的人", link: "https://www.notion.so/product/ai" }
    ]},
    { id: "translate", name: "🌐 翻譯", tools: [
      { name: "沉浸式翻譯", price: "免費/付費", desc: "瀏覽器外掛，網頁雙語對照翻譯，支援多種 AI 引擎", fit: "閱讀英文資訊必裝", link: "https://immersivetranslate.com" },
      { name: "DeepL", price: "免費/付費", desc: "專業文件翻譯品質標竿", fit: "正式文件翻譯", link: "https://www.deepl.com" }
    ]},
    { id: "video", name: "🎬 影片生成/剪輯", tools: [
      { name: "Sora", price: "付費", desc: "OpenAI 文字生成影片", fit: "短影音素材製作", link: "https://sora.com" },
      { name: "Runway", price: "免費/付費", desc: "AI 影片生成與編輯工具組", fit: "影片創作者", link: "https://runwayml.com" },
      { name: "HeyGen", price: "免費/付費", desc: "AI 虛擬人像影片、影片翻譯配音", fit: "教學/行銷影片", link: "https://www.heygen.com" },
      { name: "CapCut", price: "免費/付費", desc: "剪映國際版，AI 字幕、去背、腳本", fit: "入門剪輯", link: "https://www.capcut.com" }
    ]},
    { id: "image", name: "🎨 圖像生成", tools: [
      { name: "Midjourney", price: "付費", desc: "藝術風格圖像品質最高", fit: "設計、視覺創作", link: "https://www.midjourney.com" },
      { name: "DALL·E（ChatGPT 內建）", price: "免費/付費", desc: "對話式生圖，易上手", fit: "快速配圖", link: "https://chatgpt.com" },
      { name: "Stable Diffusion", price: "免費（開源）", desc: "可本機執行的開源生圖模型", fit: "想深入研究、不想付月費", link: "https://stability.ai" }
    ]},
    { id: "coding", name: "💻 程式開發", tools: [
      { name: "Claude Code", price: "付費", desc: "終端機 AI 編程代理，可自主完成多步驟開發任務", fit: "開發者、自動化需求", link: "https://claude.com/claude-code" },
      { name: "Cursor", price: "免費/付費", desc: "AI 原生程式編輯器", fit: "日常寫程式", link: "https://cursor.com" },
      { name: "GitHub Copilot", price: "付費", desc: "編輯器內 AI 補全與對話", fit: "GitHub 生態使用者", link: "https://github.com/features/copilot" }
    ]},
    { id: "audio", name: "🔊 語音/音樂", tools: [
      { name: "ElevenLabs", price: "免費/付費", desc: "最自然的 AI 語音合成與配音", fit: "Podcast、教學配音", link: "https://elevenlabs.io" },
      { name: "Suno", price: "免費/付費", desc: "文字生成完整歌曲", fit: "音樂創作、背景音樂", link: "https://suno.com" },
      { name: "Whisper", price: "免費（開源）", desc: "OpenAI 開源語音轉文字，準確度高", fit: "會議逐字稿", link: "https://github.com/openai/whisper" }
    ]},
    { id: "slides", name: "📊 簡報/資料分析", tools: [
      { name: "Gamma", price: "免費/付費", desc: "AI 生成簡報、文件、網頁", fit: "快速做簡報", link: "https://gamma.app" },
      { name: "Napkin", price: "免費", desc: "文字自動轉圖表與視覺化", fit: "簡報配圖", link: "https://www.napkin.ai" },
      { name: "Claude（檔案分析）", price: "免費/付費", desc: "上傳 Excel/CSV/PDF 直接分析、產出報告", fit: "資料整理分析", link: "https://claude.ai" }
    ]},
    { id: "research", name: "🔍 搜尋/研究", tools: [
      { name: "Perplexity", price: "免費/付費", desc: "AI 搜尋引擎，附來源引用", fit: "查資料取代 Google", link: "https://www.perplexity.ai" },
      { name: "NotebookLM", price: "免費", desc: "Google 的個人研究助手，上傳資料生成摘要與語音導讀", fit: "讀論文、整理大量文件", link: "https://notebooklm.google.com" }
    ]},
    { id: "agent", name: "🤖 AI Agent/自動化", tools: [
      { name: "n8n", price: "免費(自架)/付費", desc: "開源工作流自動化，可串接 AI 節點", fit: "⭐ 自動化流程（你已在用）", link: "https://n8n.io" },
      { name: "Cowork", price: "付費(Claude訂閱)", desc: "Claude 桌面代理，檔案處理、排程任務、自動化工作", fit: "⭐ 非工程師的自動化（你已在用）", link: "https://claude.com" },
      { name: "Make", price: "免費/付費", desc: "視覺化自動化平台，模組豐富", fit: "跨服務串接", link: "https://www.make.com" },
      { name: "Zapier", price: "免費/付費", desc: "最老牌的自動化服務，AI 功能持續加入", fit: "簡單自動化", link: "https://zapier.com" }
    ]}
  ],
  // 每週精選開源/新工具 —— 排程自動更新
  weekly: {
    week: "2026-07-06",
    note: "本週精選來自 GitHub Trending 與 Product Hunt",
    items: [
      { name: "Wispr Flow", price: "免費試用/付費約 $15/月", desc: "跨 App 語音輸入工具，口述後 AI 自動整理成通順文字，可直接餵給 Claude、ChatGPT 或任何輸入框", fit: "⭐ 打字慢、常需要邊想邊講的人，上手門檻最低，最適合非工程師", link: "https://wisprflow.ai" },
      { name: "Dify", price: "免費(自架)/付費(雲端)", desc: "視覺化拖拉建立 AI 應用與 Agent 工作流，內建 RAG 知識庫管理與 MCP 整合", fit: "想做客製 AI 應用但不想寫程式的人；比 n8n 更聚焦在對話型/知識庫場景", link: "https://dify.ai" },
      { name: "Open WebUI", price: "免費（開源）", desc: "自架的 ChatGPT 風格網頁介面，可串接 Ollama 等本機或線上模型", fit: "重視資料隱私、想用本機模型但要好操作介面的人；需要一點自架基礎", link: "https://github.com/open-webui/open-webui" },
      { name: "OpenClaw", price: "免費（開源）", desc: "可在 WhatsApp、Telegram、Slack、iMessage 等你已在用的通訊軟體裡直接對話的個人 AI 助理", fit: "想在熟悉的聊天工具裡用 AI 而非再開一個新 App 者；需要一定技術背景自行架設，非工程師較吃力", link: "https://github.com/openclaw/openclaw" },
      { name: "Ollama Cloud", price: "免費(本機)/付費 Pro $20、Max $100 每月", desc: "本機 LLM 生態龍頭 Ollama 新增雲端運算方案，可混合本機與雲端彈性切換", fit: "已在用 Ollama 跑本機模型、想要更強算力時的自然升級路徑", link: "https://ollama.com" }
    ]
  }
};

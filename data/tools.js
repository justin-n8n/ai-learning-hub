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
    note: "本週精選來自 GitHub Trending、Hugging Face 與 Product Hunt",
    items: [
      { name: "Mem0", price: "免費版(1萬筆記憶)/Starter $19/月/Pro $249/月", desc: "讓 AI 助理「記得住」你過去對話與偏好的記憶層工具，串進 AI 代理後就不用每次重講背景", fit: "偏自動化玩家（如串 n8n 流程）值得投資；一般用戶等 ChatGPT/Claude 內建記憶更成熟即可，非必裝", link: "https://github.com/mem0ai/mem0" },
      { name: "Databox MCP", price: "14天免費試用，需 Databox 付費帳號(Analyst $64/月起)", desc: "直接在 Claude、n8n 裡用自然語言問公司業績數據，自動生成圖表分析", fit: "已在用 Claude/n8n 且需要盯業績報表的小團隊主管值得一試；純個人用戶可跳過", link: "https://databox.com/mcp" },
      { name: "Mina Meeting Assistant", price: "新上架，多為免費試用", desc: "自動加入視訊會議、做摘要與待辦事項整理的 AI 會議助手", fit: "⭐ 每週開很多會、需要快速回顧重點的上班族很划算，幾乎零設定即可上手", link: "https://www.producthunt.com" },
      { name: "folk", price: "未公開詳細定價", desc: "把零散的簡訊、聊天訊息自動整理成可追蹤的任務或客戶關係紀錄", fit: "用簡訊/文字溝通管理客戶或人脈的小型工作者適合，屬輕量低學習成本工具", link: "https://www.producthunt.com" },
      { name: "Typeahead", price: "新上架，個人版免費/小額訂閱", desc: "Mac 上的智慧自動完成工具，在任何 App 裡預測並補完你正在打的文字", fit: "⭐ 大量打字工作者（寫作者、客服）想省時間，即裝即用零學習曲線", link: "https://www.producthunt.com" }
    ]
  },
  // 教學影片（本週新增）—— 每週排程搜尋 YouTube 更新；key 需與 categories 內工具 name 完全一致
  toolVideos: {
    "Claude": [
      { t: "10分鐘搞懂 Claude 基礎設定！Project、Skills、Style 又是什麼？讓 AI 成為最強代理人！｜泛科學院", u: "https://www.youtube.com/watch?v=5Aha8QOVke4" }
    ],
    "ChatGPT": [
      { t: "【2026最新】你不知道的20種使用ChatGPT的方法！隱藏功能和技巧完整教學", u: "https://www.youtube.com/watch?v=04cz8zNr33Y" },
      { t: "ChatGPT Skills 教學：一鍵標準化輸出內容，告別每次重寫 Prompt", u: "https://www.youtube.com/watch?v=vB9n85aeufA" }
    ],
    "Notion AI": [
      { t: "最新 Notion AI 自動化應用教學｜完整比較 ChatGPT 更好上手的 AI 工具", u: "https://www.youtube.com/watch?v=Hq56E4fmP6o" },
      { t: "線上課程買了看不完？教你用 Notion AI「會議功能」無腦學習", u: "https://www.youtube.com/watch?v=elK4w0B5-T8" }
    ],
    "沉浸式翻譯": [
      { t: "超強AI翻譯插件，全新6大使用方法｜沉浸式翻译", u: "https://www.youtube.com/watch?v=amru_En_z74" },
      { t: "教你快速上手網頁翻譯神器【沉浸式翻譯】", u: "https://www.youtube.com/watch?v=L6tCcDqbA_0" }
    ],
    "DeepL": [
      { t: "How To Use DeepL Translator For Beginners (Step-By-Step) | DeepL Tutorial 2025", u: "https://www.youtube.com/watch?v=N5lY9bPU_iA" }
    ],
    "Sora": [
      { t: "OpenAI 全球熱爆 Sora2 教學｜AI 一鍵複製人樣同聲線？！用文字生成 20 秒短片", u: "https://www.youtube.com/watch?v=jZ1_YRRSicg" },
      { t: "必學！OpenAI Sora 2 影片製作全攻略（免付費、全平台可用、免邀請碼、免VPN）", u: "https://www.youtube.com/watch?v=5XgvjKV1iEw" }
    ],
    "Runway": [
      { t: "Runway Gen 4.5 教學：5分鐘學會使用方法", u: "https://www.youtube.com/watch?v=w_kKWDyPZnI" }
    ],
    "HeyGen": [
      { t: "HeyGen AI - Full Tutorial 2026: BEST AI Avatar Video Generator", u: "https://www.youtube.com/watch?v=eFwx6fyDOmU" }
    ],
    "CapCut": [
      { t: "【CapCut 教學 2026】新手完整入門指南：從0開始學會影片剪輯", u: "https://www.youtube.com/watch?v=o2Z2yTrgayk" },
      { t: "【免費剪輯神器】CapCut 手機剪輯教學：15分鐘做出高質感影片", u: "https://www.youtube.com/watch?v=K3cax7G8cjM" }
    ],
    "Midjourney": [
      { t: "Midjourney 保姆級完整教學01：10分鐘學會Midjourney，如何註冊、使用", u: "https://www.youtube.com/watch?v=VSzIn_kkwiQ" }
    ],
    "DALL·E（ChatGPT 內建）": [
      { t: "DALL·E 3快速上手教學：比Midjourney更好用的免費AI繪圖工具，支持中文提示詞，如何在ChatGPT開啟DALL·E 3", u: "https://www.youtube.com/watch?v=Wav60DMzP74" }
    ],
    "Stable Diffusion": [
      { t: "Stable Diffusion 最新版安裝：基本操作教學：繁體中文介面設定教學", u: "https://www.youtube.com/watch?v=urF_6GSALWo" }
    ],
    "Claude Code": [
      { t: "還在羨慕別人用 AI 開發酷產品？Claude Code 保姆級教學讓你輕鬆體驗 Vibe Coding，動動嘴就能做出Anything！", u: "https://www.youtube.com/watch?v=2pM-7fBXc_M" },
      { t: "FULL Claude Code Tutorial For Beginners in 2026! (Become a PRO)", u: "https://www.youtube.com/watch?v=X_zVY3-mbM8" }
    ],
    "Cursor": [
      { t: "【Cursor 教學】入門到實戰，用AI Agent自動化你的工作流！", u: "https://www.youtube.com/watch?v=kVniOF36GEk" }
    ],
    "GitHub Copilot": [
      { t: "GitHub Copilot CLI 實戰教學：從修 Bug 到自動建立 Pull Request（含 MCP 設定與切換 Model 示範）", u: "https://www.youtube.com/watch?v=KVht2h5fb9E" }
    ],
    "ElevenLabs": [
      { t: "ElevenLabs 超擬真語音教學：結合 n8n 自動生成 AI 旁白！", u: "https://www.youtube.com/watch?v=T-oQOu_ZltM" }
    ],
    "Suno": [
      { t: "Suno AI Advanced Tutorial 2026 (In-Depth Tutorial)", u: "https://www.youtube.com/watch?v=sWg3ehNd29Y" }
    ],
    "Whisper": [
      { t: "How To Install Whisper Ai Step-By-Step (Beginner Setup Guide) 2026 (Free Version)", u: "https://www.youtube.com/watch?v=mJPtmzcyoyk" }
    ],
    "Gamma": [
      { t: "製作 PPT 太麻煩？Gamma AI，幾分鐘搞定高質感簡報，從排版到內容生成一站式解決", u: "https://www.youtube.com/watch?v=9PgHe_ThV4U" },
      { t: "它竟把6千字長文快速轉成簡報？內容處理量更大贏 ChatGPT？還能用 AI 提示語生成最精準 PPT 需求！｜Gamma｜泛科學院", u: "https://www.youtube.com/watch?v=f0Tw2w-WxRs" }
    ],
    "Napkin": [
      { t: "Napkin AI Complete Tutorial 2026 | Turn Your Text Into Stunning Visuals in Seconds with Napkin AI", u: "https://www.youtube.com/watch?v=ozHDhKGhdEE" }
    ],
    "Claude（檔案分析）": [
      { t: "10分鐘搞懂 Claude 基礎設定！Project、Skills、Style 又是什麼？讓 AI 成為最強代理人！｜泛科學院", u: "https://www.youtube.com/watch?v=5Aha8QOVke4" }
    ],
    "Perplexity": [
      { t: "【最完整教學】Perplexity Comet AI 瀏覽器 10 大神級用法：工作效率、研究搜尋、生活資訊一次搞定！", u: "https://www.youtube.com/watch?v=oLn8dbfXH-0" },
      { t: "10分鐘學會用 Perplexity，AI 教父都愛用！｜張邁可", u: "https://www.youtube.com/watch?v=SiCoXrlobec" }
    ],
    "NotebookLM": [
      { t: "NotebookLM 完整教學！93%的人還不知道的8個隱藏用法，完勝ChatGPT", u: "https://www.youtube.com/watch?v=zgWerTIynVA" },
      { t: "別再忙著手抄筆記！NotebookLM教學｜YT影片、音檔秒變逐字稿與重點摘要", u: "https://www.youtube.com/watch?v=-BhyDONU8q8" }
    ],
    "n8n": [
      { t: "超詳細教學：n8n AI 實作0基礎入門到進階（AI Agent／LLM／RAG／Webhook）", u: "https://www.youtube.com/watch?v=vvqhzbp4J5A" },
      { t: "n8n 手把手完整教學：從基礎到進階，學習簡單強大的流程自動化工作流", u: "https://www.youtube.com/watch?v=sYWCxgEF_yY" }
    ],
    "Cowork": [
      { t: "FULL Claude Cowork Tutorial For Beginners in 2026! (Zero to PRO)", u: "https://www.youtube.com/watch?v=JdQ_FHgP5ms" },
      { t: "The ONLY Claude Cowork Tutorial You'll Ever Need in 2026", u: "https://www.youtube.com/watch?v=PnPsf-hwGtI" }
    ],
    "Make": [
      { t: "告別重複作業地獄！Make.com 零基礎上手～不懂程式碼照樣也能搞定辦公室流程自動化", u: "https://www.youtube.com/watch?v=_Fz-Gmrr5B4" }
    ],
    "Zapier": [
      { t: "Zapier MCP 教學，如何連結到 Manus 等 AI Agent｜CLI 取代不了 MCP 的原因", u: "https://www.youtube.com/watch?v=uZ4i3g_WoLw" }
    ]
  },
  // 教學影片歷史累積（每工具上限 30 支，超過砍最舊）—— 排程自動維護
  toolVideosHistory: {
    "Claude": [], "ChatGPT": [], "Notion AI": [], "沉浸式翻譯": [], "DeepL": [],
    "Sora": [], "Runway": [], "HeyGen": [], "CapCut": [],
    "Midjourney": [], "DALL·E（ChatGPT 內建）": [], "Stable Diffusion": [],
    "Claude Code": [], "Cursor": [], "GitHub Copilot": [],
    "ElevenLabs": [], "Suno": [], "Whisper": [],
    "Gamma": [], "Napkin": [], "Claude（檔案分析）": [],
    "Perplexity": [], "NotebookLM": [],
    "n8n": [], "Cowork": [], "Make": [], "Zapier": []
  }
};

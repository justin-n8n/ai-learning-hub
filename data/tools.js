// AI 工具庫資料檔 —— 每週由 Cowork 排程自動更新（新工具加到對應分類，weekly 區塊放每週精選）
window.SITE_TOOLS = {
  lastUpdated: "2026-07-20",
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
      { name: "CapCut", price: "免費/付費", desc: "剪映國際版，AI 字幕、去背、腳本", fit: "入門剪輯", link: "https://www.capcut.com" },
      { name: "Descript", price: "免費(每月約1小時)/付費 $16 起(年繳,每人/月)", desc: "用「編輯逐字稿」的方式剪輯影片與 Podcast，刪除文字就能同步刪除對應片段", fit: "做教學影片、Podcast 的內容創作者，比傳統剪輯軟體更容易上手", link: "https://descript.com" }
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
    { id: "productivity", name: "🗓️ 時間管理/會議", tools: [
      { name: "Fireflies.ai", price: "免費(20 credits)/付費 $10 起(年繳,每席位/月)", desc: "自動加入會議、轉錄逐字稿並產出摘要與待辦事項的 AI 會議助理", fit: "⭐ 開會多的人非常值得學，設定一次後全自動運作，非工程師友善", link: "https://fireflies.ai" },
      { name: "Reclaim.ai", price: "免費(有限功能)/付費 $8~10 起(每人/月)", desc: "自動幫你把待辦任務、習慣排進行事曆空檔，取代手動喬時間", fit: "⭐ 已用 Notion/Heptabase 管理任務、想進一步自動化時間規劃的人", link: "https://reclaim.ai" }
    ]},
    { id: "agent", name: "🤖 AI Agent/自動化", tools: [
      { name: "n8n", price: "免費(自架)/付費", desc: "開源工作流自動化，可串接 AI 節點", fit: "⭐ 自動化流程（你已在用）", link: "https://n8n.io" },
      { name: "Cowork", price: "付費(Claude訂閱)", desc: "Claude 桌面代理，檔案處理、排程任務、自動化工作", fit: "⭐ 非工程師的自動化（你已在用）", link: "https://claude.com" },
      { name: "Make", price: "免費/付費", desc: "視覺化自動化平台，模組豐富", fit: "跨服務串接", link: "https://www.make.com" },
      { name: "Zapier", price: "免費/付費", desc: "最老牌的自動化服務，AI 功能持續加入", fit: "簡單自動化", link: "https://zapier.com" },
      { name: "Sim", price: "免費(1,000點)/Pro $25/月/Max $100/月/開源可自架", desc: "開源 AI Agent 工作區，用聊天描述需求、拖拉畫布或寫程式碼三種方式建立自動化工作流，串接上千種工具與 LLM", fit: "⭐ 已在用 n8n 的人學習曲線低，想保留視覺化操作又要更彈性的自動化玩家值得一試", link: "https://www.sim.ai" },
      { name: "Dify", price: "開源免費(可自架)/雲端 Sandbox 免費、Professional $59 起/月", desc: "低程式碼的 AI 工作流程與 Agent 建構平台，支援 RAG 知識庫、多模型與 MCP 整合", fit: "已熟悉 n8n、想進階打造 AI 客服機器人或知識庫應用的人，學習曲線中等", link: "https://dify.ai" }
    ]}
  ],
  // 每週精選開源/新工具 —— 排程自動更新
  weekly: {
    week: "2026-07-20",
    note: "本週精選來自 GitHub Trending 與 Product Hunt（Hugging Face 本週熱門仍偏研究向 demo，無適合一般使用者的項目，故未列入）",
    items: [
      { name: "Fireflies.ai", price: "免費(20 credits)/付費 $10 起(年繳,每席位/月)", desc: "自動加入會議、轉錄逐字稿並產出摘要與待辦事項的 AI 會議助理", fit: "⭐ 開會多的人非常值得學，設定一次後全自動運作，非工程師友善", link: "https://fireflies.ai" },
      { name: "Reclaim.ai", price: "免費(有限功能)/付費 $8~10 起(每人/月)", desc: "自動幫你把待辦任務、習慣排進行事曆空檔，取代手動喬時間", fit: "⭐ 已用 Notion/Heptabase 管理任務、想進一步自動化時間規劃的人，與生產力興趣高度重疊", link: "https://reclaim.ai" },
      { name: "Descript", price: "免費(每月約1小時)/付費 $16 起(年繳,每人/月)", desc: "用「編輯逐字稿」的方式剪輯影片與 Podcast，刪文字就同步刪對應片段", fit: "做教學影片、Podcast 的內容創作者，比傳統剪輯軟體易上手", link: "https://descript.com" },
      { name: "Dify", price: "開源免費(可自架)/雲端 Sandbox 免費、Professional $59 起/月", desc: "低程式碼的 AI 工作流程與 Agent 建構平台，支援 RAG 知識庫、多模型與 MCP 整合", fit: "⭐ 想做比 n8n 更偏「AI 應用/客服機器人」的自動化，適合已熟悉 n8n 想進階的使用者", link: "https://dify.ai" },
      { name: "Glideo", price: "免費（Mac，無浮水印，全功能）", desc: "自動抓取滑鼠動作、幫你加特效放大的螢幕錄影工具，錄完幾乎不用再剪", fit: "做教學/Demo 影片的人可省下後製時間，上手極快，但目前僅支援 macOS", link: "https://glideo.app" },
      { name: "Yasmine Works", price: "免費試用 7 天，需自備 Claude 訂閱（本身無獨立訂閱費用資訊）", desc: "進駐 Slack 的「AI 同事」，每個頻道都是一個有記憶、能操作 500+ 工具的助理", fit: "概念新穎，但偏 Slack 生態與團隊場景，對個人用戶實用性中等，可作話題性了解", link: "https://yasmine.works" }
    ]
  },
  // 教學影片（本週新增）—— 每週排程搜尋 YouTube 更新；key 需與 categories 內工具 name 完全一致
  toolVideos: {
    "Claude": [
      { t: "【超實用】一次搞懂Claude AI全生態！2026全新初學者完整教程，從基本用法到全新自動化系統！零基礎初學者必看，15個Claude超棒的使用方法！ChatGPT用戶看完都轉投了！", u: "https://www.youtube.com/watch?v=zm3K831v470" },
      { t: "CLAUDE CODE 4小時完整教學：學會Skills / AI 自動工作 / 搜集資料 (2026)", u: "https://www.youtube.com/watch?v=fYuohy6rQ9c" }
    ],
    "ChatGPT": [
      { t: "【2026最新】你不知道的20種使用ChatGPT的方法！ChatGPT沒人談論的隱藏功能和技巧，好用到開掛一樣！手把手帶你從小白到頂尖專家！", u: "https://www.youtube.com/watch?v=04cz8zNr33Y" }
    ],
    "Notion AI": [
      { t: "【NOTION AI筆記寫手】英文課不再手忙腳亂！錄音直接變全自動複習筆記", u: "https://www.youtube.com/watch?v=oAlnbyj-urw" },
      { t: "Notion AI Can Do Anything! (Complete Tutorial 2026)", u: "https://www.youtube.com/watch?v=ODbTqcor84g" }
    ],
    "沉浸式翻譯": [
      { t: "【中文外語對照】沉浸式翻譯：網站、文件、YouTube字幕一秒雙語顯示翻譯！語言學習必備！2026提升工作效率工具！", u: "https://www.youtube.com/watch?v=LfOzyIH5RGg" },
      { t: "【沉浸式翻譯30s教學】無字幕救星！沉浸式翻譯「AI字幕生成」教學", u: "https://www.youtube.com/watch?v=Zs2tflpsYvA" }
    ],
    "DeepL": [
      { t: "How To Use DeepL Translator For Beginners (2026 Guide)", u: "https://www.youtube.com/watch?v=hi35fAfjNc8" },
      { t: "How To Use DeepL Chrome Extension (2026) | BEST FULL GUIDE", u: "https://www.youtube.com/watch?v=ME1AAdlHCog" }
    ],
    "Sora": [
      { t: "必學！OpenAI Sora 2 影片製作全攻略（免付費、全平台可用、免邀請碼、免VPN）", u: "https://www.youtube.com/watch?v=5XgvjKV1iEw" },
      { t: "【Sora AI 影片生成教學】自由混合影片功能、自動分鏡設定，讓影片創作變得簡單又有趣！內含如何提升影片畫質教學!", u: "https://www.youtube.com/watch?v=pIXKND86ldo" }
    ],
    "Runway": [
      { t: "How To Use Runway For FREE Unlimited in 2026 | Step-by-Step Tutorial", u: "https://www.youtube.com/watch?v=kPg0s3ehp3Y" },
      { t: "Ultimate Runway Gen 4.5 Tutorial For New Users in 2026", u: "https://www.youtube.com/watch?v=IUge3u4ZrqQ" }
    ],
    "HeyGen": [
      { t: "Heygen AI 影片生成工具介紹及教學｜AI 影片產生工具推薦", u: "https://www.youtube.com/watch?v=eeJ2L0Q0lUA" },
      { t: "How to Use HeyGen in 2026 (Step-by-Step Beginner Tutorial)", u: "https://www.youtube.com/watch?v=RTmlxuroR50" }
    ],
    "CapCut": [
      { t: "CapCut影片剪輯教學大全｜適合新手的完整教學系列", u: "https://www.youtube.com/playlist?list=PLNUIzu31Ju-fOMovmfaOYfGvrMtWALIpL" },
      { t: "【免費剪輯神器】CapCut 手機剪輯教學：15分鐘做出高質感影片", u: "https://www.youtube.com/watch?v=K3cax7G8cjM" }
    ],
    "Descript": [
      { t: "ULTIMATE Descript Tutorial for Beginners in 2026 | How to Edit Fast Using AI", u: "https://www.youtube.com/watch?v=L4lUwaI7NSI" },
      { t: "Descript Tutorial for Beginners 2026: Complete Video Editing Guide", u: "https://www.youtube.com/watch?v=D5MQbP4b_sQ" }
    ],
    "Midjourney": [
      { t: "Midjourney 保姆級完整教學01：10分鐘學會Midjourney，如何註冊、使用", u: "https://www.youtube.com/watch?v=VSzIn_kkwiQ" },
      { t: "Midjourney V7網頁版攻略，玩AI影片前必學｜細節大師的提示詞、設定到修圖全流程！", u: "https://www.youtube.com/watch?v=EiUFzuSaL1U" }
    ],
    "DALL·E（ChatGPT 內建）": [
      { t: "DALL·E 3快速上手教學：比Midjourney更好用的免費AI繪圖工具，支持中文提示詞，如何在ChatGPT開啟DALL·E 3", u: "https://www.youtube.com/watch?v=Wav60DMzP74" },
      { t: "【DALL.E 3】 你唯一需要的AI圖片工具，DALLE.3完整教學，地球上最強大的文字轉圖AI，ChatGPT4支持，完全免費，Bing Image Creator", u: "https://www.youtube.com/watch?v=2RNHxUzeZcg" }
    ],
    "Stable Diffusion": [
      { t: "Stable Diffusion 最新版安裝：基本操作教學：繁體中文介面設定教學", u: "https://www.youtube.com/watch?v=urF_6GSALWo" },
      { t: "How to Setup Stable Diffusion Locally (2026 Guide)", u: "https://www.youtube.com/watch?v=wiC0wZiuv4I" }
    ],
    "Claude Code": [
      { t: "【超實用】一次搞懂Claude AI全生態！2026全新初學者完整教程，從基本用法到全新自動化系統！", u: "https://www.youtube.com/watch?v=zm3K831v470" },
      { t: "CLAUDE CODE 4小時完整教學：學會Skills / AI 自動工作 / 搜集資料 (2026)", u: "https://www.youtube.com/watch?v=fYuohy6rQ9c" }
    ],
    "Cursor": [
      { t: "【Cursor 教學】入門到實戰，用AI Agent自動化你的工作流！", u: "https://www.youtube.com/watch?v=kVniOF36GEk" },
      { t: "Cursor AI: The Only IDE You Need in 2026 (Beginner to Pro)", u: "https://www.youtube.com/watch?v=ed26g7jxAbU" }
    ],
    "GitHub Copilot": [
      { t: "GitHub Copilot CLI 實戰教學：從修 Bug 到自動建立 Pull Request（含 MCP 設定與切換 Model 示範）", u: "https://www.youtube.com/watch?v=KVht2h5fb9E" },
      { t: "How To Use GitHub Copilot With Visual Studio Code | Set Up GitHub Copilot in VS Code (2026)", u: "https://www.youtube.com/watch?v=AIgZH8zbMTE" }
    ],
    "ElevenLabs": [
      { t: "只給文字腳本，AI 自動配好語音 + 音樂 + 影片｜ElevenLabs AI 教程", u: "https://www.youtube.com/watch?v=gGAGjPbecQI" },
      { t: "ElevenLabs Complete Platform Tutorial 2026: Beginner To Pro In 50 Minutes", u: "https://www.youtube.com/watch?v=6-WqxzJz8Wg" }
    ],
    "Suno": [
      { t: "Suno AI 2026 作曲完整教學｜入門到進階", u: "https://www.youtube.com/watch?v=Xv_cpCtN4yE" },
      { t: "生產力黑科技EP09｜Suno AI 教學：如何用 Gemini 寫歌詞 + 生成音樂？2026 最新 AI 作曲全攻略", u: "https://www.youtube.com/watch?v=xiG6FFySkY0" }
    ],
    "Whisper": [
      { t: "Whisper YouTube 中文字幕生成指南（無需Key）：從新手入門到 AI 校正", u: "https://www.youtube.com/watch?v=E-X3kp8wCIg" },
      { t: "YouTube 影片字幕神器：Whisper AI 語音轉字幕超簡單教學", u: "https://www.youtube.com/watch?v=VXzmkYaayUE" }
    ],
    "Gamma": [
      { t: "簡報製作教學，Gamma.app：AI 幫你做簡報", u: "https://www.youtube.com/watch?v=YHmM2Xavjc0" },
      { t: "Gamma App Tutorial - 2026 | From Idea to Slides in Seconds - Build Full Presentation Inside Claude", u: "https://www.youtube.com/watch?v=A1O7ot12YJI" }
    ],
    "Napkin": [
      { t: "【Napkin AI 教學- 超強AI 工具】文字一鍵生成專業圖表", u: "https://www.youtube.com/watch?v=c5vYIyJD43I" },
      { t: "這麼好用還完全免費？Napkin AI秒生成設計感爆棚的圖表（泛科學院）", u: "https://www.youtube.com/watch?v=TKRFfB3Ja0w" }
    ],
    "Claude（檔案分析）": [
      { t: "最聰明的AI工具？Claude 免費版 5 大神功能：一鍵生成 Excel 分析與 Office 檔案（泛科學院）", u: "https://www.youtube.com/watch?v=114H9EWKfzM" },
      { t: "【Claude Code 新手必學】從安裝流程、MCP＋Skills 功能強化、報表分析等實戰技巧，一次全學會！", u: "https://www.youtube.com/watch?v=vPXXD7W56Bw" }
    ],
    "Perplexity": [
      { t: "【最完整教學】Perplexity Comet AI 瀏覽器 10 大神級用法：工作效率、研究搜尋、生活資訊一次搞定！", u: "https://www.youtube.com/watch?v=oLn8dbfXH-0" },
      { t: "The CORRECT way to use Perplexity In 2026 (Beginner Guide)", u: "https://www.youtube.com/watch?v=t4xwaRmFrNs" }
    ],
    "NotebookLM": [
      { t: "NotebookLM 完整教學！93%的人還不知道的8個隱藏用法，完勝ChatGPT", u: "https://www.youtube.com/watch?v=zgWerTIynVA" },
      { t: "NotebookLM完整教學！10個95%的人還不知道的超強隱藏用法", u: "https://www.youtube.com/watch?v=pbds1YRoXJw" }
    ],
    "n8n": [
      { t: "2026 最強 N8N 教學！從零開始打造你的 AI 自動化工作流", u: "https://www.youtube.com/watch?v=6s_Z9Tl0sHU" },
      { t: "別再手動做了！零基礎學會用n8n打造AI自動化工作流：從抓取資料到AI決策，全流程手把手教學｜Kelly Tsai", u: "https://www.youtube.com/watch?v=-vKewrChihk" }
    ],
    "Cowork": [
      { t: "Claude Cowork 最友善的手把手教學！你還在叫 AI 幫你想答案？但高手們都已經在用 AI 交成品了", u: "https://www.youtube.com/watch?v=_cVTzXvb7xs" },
      { t: "Claude Cowork/Code保姆級完整教學：從入門到進階，自動生成內容、網頁和工作流，快速打造你的AI員工", u: "https://www.youtube.com/watch?v=Lq-wedAiffo" }
    ],
    "Make": [
      { t: "告別重複作業地獄！Make.com 零基礎上手～不懂程式碼照樣也能搞定辦公室流程自動化", u: "https://www.youtube.com/watch?v=_Fz-Gmrr5B4" },
      { t: "使用Make.com 完成臉書粉絲專業自動化發文", u: "https://www.youtube.com/watch?v=YBgY1k1-_iU" }
    ],
    "Zapier": [
      { t: "Zapier自動化實戰教學：一步步帶你實現工作流自動化", u: "https://www.youtube.com/watch?v=3noUj0KANVE" },
      { t: "How to Use Zapier in 2026: Complete Setup & Strategy", u: "https://www.youtube.com/watch?v=AqVB9ZU9cGg" }
    ],
    "Sim": [
      { t: "How to Use SIM AI Step-by-Step Guide 2026", u: "https://www.youtube.com/watch?v=drNL0QqSMNw" }
    ],
    "Fireflies.ai": [
      { t: "2026 Fireflies.ai Tutorial + Coupon Code", u: "https://www.youtube.com/watch?v=1yNtt802IiY" },
      { t: "How to Use FireFlies AI Notes in 2026 | Ultimate Tutorial", u: "https://www.youtube.com/watch?v=8NNEnT0UkBY" }
    ],
    "Reclaim.ai": [
      { t: "Reclaim AI Tutorial 2026: How To Use Reclaim.ai (For Beginners)", u: "https://www.youtube.com/watch?v=8KmSXDuispE" },
      { t: "How to Use Reclaim.AI (2026) Best AI Time Management App", u: "https://www.youtube.com/watch?v=fCc0zEwKv00" }
    ],
    "Dify": [
      { t: "Dify 系統化教學｜Dify 零代碼革命：RAG 知識庫、自動化流程與企業級部署全解析", u: "https://www.youtube.com/watch?v=IX8g7l578oQ" },
      { t: "使用 Dify 工作流 | 10 分鐘打造高效 AI 客服系統！(附 CC 字幕)", u: "https://www.youtube.com/watch?v=ZeBMzx4y8l0" }
    ]
  },
  // 教學影片歷史累積（每工具上限 30 支，超過砍最舊）—— 排程自動維護
  toolVideosHistory: {
    "Claude": [
      { t: "一次搞懂Claude AI全生態！2026全新初學者完整教程", u: "https://www.youtube.com/watch?v=zm3K831v470" },
      { t: "10分鐘搞懂 Claude 基礎設定！Project、Skills、Style 又是什麼？讓 AI 成為最強代理人！｜泛科學院", u: "https://www.youtube.com/watch?v=5Aha8QOVke4" }
    ],
    "ChatGPT": [
      { t: "【2026最新】你不知道的20種使用ChatGPT的方法！隱藏功能和技巧完整教學", u: "https://www.youtube.com/watch?v=04cz8zNr33Y" },
      { t: "ChatGPT 大改版：5 個變化一次看懂（GPT-5.6）", u: "https://www.youtube.com/watch?v=Au206yH7ufE" },
      { t: "ChatGPT Skills 教學：一鍵標準化輸出內容，告別每次重寫 Prompt", u: "https://www.youtube.com/watch?v=vB9n85aeufA" }
    ],
    "Notion AI": [
      { t: "Notion AI Can Do Anything! (Complete Tutorial 2026)", u: "https://www.youtube.com/watch?v=ODbTqcor84g" },
      { t: "【NOTION AI筆記寫手】英文課不再手忙腳亂！錄音直接變全自動複習筆記", u: "https://www.youtube.com/watch?v=oAlnbyj-urw" },
      { t: "最新 Notion AI 自動化應用教學｜完整比較 ChatGPT 更好上手的 AI 工具", u: "https://www.youtube.com/watch?v=Hq56E4fmP6o" },
      { t: "線上課程買了看不完？教你用 Notion AI「會議功能」無腦學習", u: "https://www.youtube.com/watch?v=elK4w0B5-T8" }
    ],
    "沉浸式翻譯": [
      { t: "【中文外語對照】沉浸式翻譯：網站、文件、YouTube字幕一秒雙語顯示", u: "https://www.youtube.com/watch?v=LfOzyIH5RGg" },
      { t: "【沉浸式翻譯30s教學】無字幕救星！AI字幕生成教學", u: "https://www.youtube.com/watch?v=Zs2tflpsYvA" },
      { t: "超強AI翻譯插件，全新6大使用方法｜沉浸式翻译", u: "https://www.youtube.com/watch?v=amru_En_z74" },
      { t: "教你快速上手網頁翻譯神器【沉浸式翻譯】", u: "https://www.youtube.com/watch?v=L6tCcDqbA_0" }
    ],
    "DeepL": [
      { t: "DeepL翻译全功能揭秘｜提升效率的必备神器", u: "https://www.youtube.com/watch?v=GdLVIS00cmw" },
      { t: "How To Use DeepL Chrome Extension (2026)", u: "https://www.youtube.com/watch?v=ME1AAdlHCog" },
      { t: "How To Use DeepL Translator For Beginners (Step-By-Step) | DeepL Tutorial 2025", u: "https://www.youtube.com/watch?v=N5lY9bPU_iA" }
    ],
    "Sora": [
      { t: "必學！OpenAI Sora 2 影片製作全攻略（免付費、全平台可用、免邀請碼、免VPN）", u: "https://www.youtube.com/watch?v=5XgvjKV1iEw" },
      { t: "【Sora 2 教學 - 廣東話版】無需邀請碼及 VPN", u: "https://www.youtube.com/watch?v=2RILgLMraxk" },
      { t: "OpenAI 全球熱爆 Sora2 教學｜AI 一鍵複製人樣同聲線？！用文字生成 20 秒短片", u: "https://www.youtube.com/watch?v=jZ1_YRRSicg" }
    ],
    "Runway": [
      { t: "Runway 完整教學｜AI生成影片｜完全免費", u: "https://www.youtube.com/watch?v=ZxZ4AOwR08U" },
      { t: "【AI影片生成】如何使用Runway Gen-3 Alpha 創作電影級視頻", u: "https://www.youtube.com/watch?v=paGpFGWwNOE" },
      { t: "Runway Gen 4.5 教學：5分鐘學會使用方法", u: "https://www.youtube.com/watch?v=w_kKWDyPZnI" }
    ],
    "HeyGen": [
      { t: "竟然用AI說流利日文 教你用HeyGen創建虛擬分身", u: "https://www.youtube.com/watch?v=1rW8KfprMtY" },
      { t: "【秒變語言天才！HeyGen AI 教學＋實戰（三種語言現場實測）", u: "https://www.youtube.com/watch?v=jGYbWOGX5ZE" },
      { t: "HeyGen AI - Full Tutorial 2026: BEST AI Avatar Video Generator", u: "https://www.youtube.com/watch?v=eFwx6fyDOmU" }
    ],
    "CapCut": [
      { t: "【免費剪輯神器】CapCut 手機剪輯教學：15分鐘做出高質感影片", u: "https://www.youtube.com/watch?v=K3cax7G8cjM" },
      { t: "CapCut Tutorial for Beginners (2026) – Full Video Editing Guide", u: "https://www.youtube.com/watch?v=j5_471mO14c" },
      { t: "【CapCut 教學 2026】新手完整入門指南：從0開始學會影片剪輯", u: "https://www.youtube.com/watch?v=o2Z2yTrgayk" }
    ],
    "Descript": [],
    "Midjourney": [
      { t: "Midjourney 保姆級完整教學01：10分鐘學會Midjourney，如何註冊、使用", u: "https://www.youtube.com/watch?v=VSzIn_kkwiQ" },
      { t: "【MidJourney 線上網頁版最新教學】不需再用Discord 了", u: "https://www.youtube.com/watch?v=GAQ6HRktsoY" }
    ],
    "DALL·E（ChatGPT 內建）": [
      { t: "DALL·E 3快速上手教學：比Midjourney更好用的免費AI繪圖工具，支持中文提示詞，如何在ChatGPT開啟DALL·E 3", u: "https://www.youtube.com/watch?v=Wav60DMzP74" },
      { t: "DALL·E 3特殊技巧 & 一致性角色創建", u: "https://www.youtube.com/watch?v=1YbOAMLn0mA" }
    ],
    "Stable Diffusion": [
      { t: "Stable Diffusion 最新版安裝：基本操作教學：繁體中文介面設定教學", u: "https://www.youtube.com/watch?v=urF_6GSALWo" },
      { t: "Stable Diffusion 零基礎新手入門！Part 1 - 安裝與基本設置 (Windows/Mac)", u: "https://www.youtube.com/watch?v=d2Xj0fKKaJ4" }
    ],
    "Claude Code": [
      { t: "全网最全！60分钟全面掌握Claude Code", u: "https://www.youtube.com/watch?v=r-CGDAGeXLU" },
      { t: "CLAUDE CODE 4小時完整教學：學會Skills / AI 自動工作 / 搜集資料 (2026)", u: "https://www.youtube.com/watch?v=fYuohy6rQ9c" },
      { t: "還在羨慕別人用 AI 開發酷產品？Claude Code 保姆級教學讓你輕鬆體驗 Vibe Coding，動動嘴就能做出Anything！", u: "https://www.youtube.com/watch?v=2pM-7fBXc_M" },
      { t: "FULL Claude Code Tutorial For Beginners in 2026! (Become a PRO)", u: "https://www.youtube.com/watch?v=X_zVY3-mbM8" }
    ],
    "Cursor": [
      { t: "【Cursor 教學】入門到實戰，用AI Agent自動化你的工作流！", u: "https://www.youtube.com/watch?v=kVniOF36GEk" },
      { t: "Cursor AI 教學 - 實戰4個月後的終極使用心得！10x你的Programming 效率", u: "https://www.youtube.com/watch?v=yHiYyiWMhlI" }
    ],
    "GitHub Copilot": [
      { t: "GitHub Copilot CLI 實戰教學：從修 Bug 到自動建立 Pull Request（含 MCP 設定與切換 Model 示範）", u: "https://www.youtube.com/watch?v=KVht2h5fb9E" },
      { t: "GitHub Copilot 最佳實務：不要這麼做就對了", u: "https://www.youtube.com/watch?v=QW9bu2aeQC8" }
    ],
    "ElevenLabs": [
      { t: "ElevenLabs AI 语音生成教程：50 分钟学会AI 配音", u: "https://www.youtube.com/watch?v=vCYem4AH7Z8" },
      { t: "只給文字腳本，AI 自動配好語音 + 音樂 + 影片｜ElevenLabs AI 教程", u: "https://www.youtube.com/watch?v=gGAGjPbecQI" },
      { t: "ElevenLabs 超擬真語音教學：結合 n8n 自動生成 AI 旁白！", u: "https://www.youtube.com/watch?v=T-oQOu_ZltM" }
    ],
    "Suno": [
      { t: "Suno AI 2026 作曲完整教學｜入門到進階", u: "https://www.youtube.com/watch?v=Xv_cpCtN4yE" },
      { t: "SUNO AI 教學: 介面深度解析、自定義模式、實戰技巧全公開", u: "https://www.youtube.com/watch?v=qg2bN10glyw" },
      { t: "Suno AI Advanced Tutorial 2026 (In-Depth Tutorial)", u: "https://www.youtube.com/watch?v=sWg3ehNd29Y" }
    ],
    "Whisper": [
      { t: "實測推薦！完全免費的 OpenAI Whisper 語音轉文字自動工具｜Buzz 教學", u: "https://www.youtube.com/watch?v=HHE5gbZgc8g" },
      { t: "YouTube 影片字幕神器：Whisper AI 語音轉字幕超簡單教學", u: "https://www.youtube.com/watch?v=VXzmkYaayUE" },
      { t: "How To Install Whisper Ai Step-By-Step (Beginner Setup Guide) 2026 (Free Version)", u: "https://www.youtube.com/watch?v=mJPtmzcyoyk" }
    ],
    "Gamma": [
      { t: "Gamma AI Tutorial 2026 – How to use Gamma AI for Presentations & Graphics", u: "https://www.youtube.com/watch?v=rhNzKR2g300" },
      { t: "Gamma AI Website Builder Tutorial (2026) – Build a Website in Minutes", u: "https://www.youtube.com/watch?v=_CevSPs_0dI" },
      { t: "製作 PPT 太麻煩？Gamma AI，幾分鐘搞定高質感簡報，從排版到內容生成一站式解決", u: "https://www.youtube.com/watch?v=9PgHe_ThV4U" },
      { t: "它竟把6千字長文快速轉成簡報？內容處理量更大贏 ChatGPT？還能用 AI 提示語生成最精準 PPT 需求！｜Gamma｜泛科學院", u: "https://www.youtube.com/watch?v=f0Tw2w-WxRs" }
    ],
    "Napkin": [
      { t: "【Napkin AI 教學- 超強AI 工具】文字一鍵生成專業圖表", u: "https://www.youtube.com/watch?v=c5vYIyJD43I" },
      { t: "這麼好用還完全免費？Napkin AI秒生成設計感爆棚的圖表（泛科學院）", u: "https://www.youtube.com/watch?v=TKRFfB3Ja0w" },
      { t: "Napkin AI Complete Tutorial 2026 | Turn Your Text Into Stunning Visuals in Seconds with Napkin AI", u: "https://www.youtube.com/watch?v=ozHDhKGhdEE" }
    ],
    "Claude（檔案分析）": [
      { t: "最聰明的AI工具？Claude 免費版 5 大神功能：一鍵生成 Excel 分析與 Office 檔案（泛科學院）", u: "https://www.youtube.com/watch?v=114H9EWKfzM" },
      { t: "【Claude Code教學】Excel資料自動變PPT圖表！AI跨檔案生成可編輯簡報", u: "https://www.youtube.com/watch?v=juxoWOlsPyU" },
      { t: "10分鐘搞懂 Claude 基礎設定！Project、Skills、Style 又是什麼？讓 AI 成為最強代理人！｜泛科學院", u: "https://www.youtube.com/watch?v=5Aha8QOVke4" }
    ],
    "Perplexity": [
      { t: "【最完整教學】Perplexity Comet AI 瀏覽器 10 大神級用法：工作效率、研究搜尋、生活資訊一次搞定！", u: "https://www.youtube.com/watch?v=oLn8dbfXH-0" },
      { t: "10分鐘學會用 Perplexity，AI 教父都愛用！｜張邁可", u: "https://www.youtube.com/watch?v=SiCoXrlobec" }
    ],
    "NotebookLM": [
      { t: "NotebookLM 完整教學！93%的人還不知道的8個隱藏用法，完勝ChatGPT", u: "https://www.youtube.com/watch?v=zgWerTIynVA" },
      { t: "NotebookLM完整教學！10個95%的人還不知道的超強隱藏用法", u: "https://www.youtube.com/watch?v=pbds1YRoXJw" },
      { t: "別再忙著手抄筆記！NotebookLM教學｜YT影片、音檔秒變逐字稿與重點摘要", u: "https://www.youtube.com/watch?v=-BhyDONU8q8" }
    ],
    "n8n": [
      { t: "2026 最強 N8N 教學！從零開始打造你的 AI 自動化工作流", u: "https://www.youtube.com/watch?v=6s_Z9Tl0sHU" },
      { t: "從零基礎到精通n8n！萬用三步驟做出AI自動化助理", u: "https://www.youtube.com/watch?v=mNRphFUPzjE" },
      { t: "超詳細教學：n8n AI 實作0基礎入門到進階（AI Agent／LLM／RAG／Webhook）", u: "https://www.youtube.com/watch?v=vvqhzbp4J5A" },
      { t: "n8n 手把手完整教學：從基礎到進階，學習簡單強大的流程自動化工作流", u: "https://www.youtube.com/watch?v=sYWCxgEF_yY" }
    ],
    "Cowork": [
      { t: "Claude Cowork 最友善的手把手教學", u: "https://www.youtube.com/watch?v=_cVTzXvb7xs" },
      { t: "Claude Cowork太強了，7個瘋狂案例，自動處理郵件、操控你的電腦、遠端派任務", u: "https://www.youtube.com/watch?v=9WL8HOrMH2s" },
      { t: "FULL Claude Cowork Tutorial For Beginners in 2026! (Zero to PRO)", u: "https://www.youtube.com/watch?v=JdQ_FHgP5ms" },
      { t: "The ONLY Claude Cowork Tutorial You'll Ever Need in 2026", u: "https://www.youtube.com/watch?v=PnPsf-hwGtI" }
    ],
    "Make": [
      { t: "告別重複作業地獄！Make.com 零基礎上手～不懂程式碼照樣也能搞定辦公室流程自動化", u: "https://www.youtube.com/watch?v=_Fz-Gmrr5B4" }
    ],
    "Zapier": [
      { t: "Zapier自動化實戰教學：一步步帶你實現工作流自動化", u: "https://www.youtube.com/watch?v=3noUj0KANVE" },
      { t: "Zapier MCP 教學，如何連結到 Manus 等 AI Agent｜CLI 取代不了 MCP 的原因", u: "https://www.youtube.com/watch?v=uZ4i3g_WoLw" }
    ],
    "Sim": [],
    "Fireflies.ai": [],
    "Reclaim.ai": [],
    "Dify": []
  }
};

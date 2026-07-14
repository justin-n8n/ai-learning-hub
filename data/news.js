// 每日 AI 新聞資料檔 —— 由 Cowork 排程自動更新
// 格式：{date, stars(1-5), category, title, summary, why, source, url}
window.SITE_NEWS = {
  lastUpdated: "2026-07-14",
  picks: [
    {
      date: "2026-07-07",
      stars: 5,
      category: "Anthropic",
      title: "Claude Cowork 正式擴展至 Web 與 Mobile，跨裝置接續工作",
      summary: "Anthropic 宣布 Claude Cowork（原本僅限桌面版）開放 Max 方案用戶使用網頁版與行動版 Beta，並將陸續開放更多方案。Cowork session 改為預設在雲端執行，使用者可以在電腦上開始任務，用手機查看進度，即使筆電闔上也能接續完成；Chat 與 Cowork 介面也在網頁與桌面版整合為同一個工作空間。使用數據顯示，Cowork 最大宗用途（33.4%）是整理業務流程，例如彙整分散更新、建立入職清單、核對試算表，軟體開發僅佔 8.7%。",
      why: "你正在用的 Cowork 現在能跨裝置接續任務，等於在手機上也能查看甚至延續今天交辦的工作，非常值得馬上體驗看看。",
      source: "TechCrunch / VentureBeat",
      url: "https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/"
    },
    {
      date: "2026-07-13",
      stars: 4,
      category: "OpenAI",
      title: "OpenAI 推出全雙工語音 AI「GPT-Live」，邊聽邊想邊說",
      summary: "OpenAI 發布新語音 AI 產品 GPT-Live，採用「全雙工（full-duplex）」設計，能同時聆聽、思考與說話，不需要等對方講完才回應；具備即時翻譯、對話中即時網路搜尋，以及把任務交接給其他 AI 代理人的能力。",
      why: "如果你常需要跨語言溝通或想用語音快速下指令做事，GPT-Live 這種「邊聽邊想」的互動方式，可能比現有語音助理更貼近真人對話的節奏。",
      source: "BuildFastWithAI",
      url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-13-2026"
    },
    {
      date: "2026-06-14",
      stars: 4,
      category: "工具",
      title: "Heptabase 更新 Goal Discovery：AI 自動讀懂你白板上正在成形的學習方向",
      summary: "Heptabase 公開路線圖與更新日誌顯示，「Goal Discovery」功能持續強化：AI 會讀取使用者近期的白板內容，主動歸納出正在成形的學習方向，並讓使用者選擇要納入分析的白板、隨時重新探索目標；同時 AI Agent 也新增 Goal Page 與 Skills 相關功能，可協助管理筆記、標籤、白板與課程進度。",
      why: "如果你用 Heptabase 做視覺化筆記與學習規劃，Goal Discovery 能幫你從一堆卡片和白板中，自動看出自己實際在往哪個方向鑽研，省去手動整理的功夫。",
      source: "Heptabase Public Wiki",
      url: "https://wiki.heptabase.com/changelog"
    },
    {
      date: "2026-07-11",
      stars: 3,
      category: "產業",
      title: "蘋果控告 OpenAI 竊取商業機密，馬斯克與奧特曼隔空交火",
      summary: "蘋果於 7 月 11 日對 OpenAI 提起訴訟，指控其竊取商業機密，訴訟焦點在於超過 400 名前蘋果員工（多來自晶片設計與裝置端 AI 團隊）跳槽至 OpenAI。消息傳出後，Elon Musk 在 X 上轉發並冷嘲 OpenAI 的挖角手法，Sam Altman 隨即反擊，兩人隔空交火延燒至隔日。",
      why: "科技巨頭間的人才與專利爭奪戰，往往預示著下一波裝置端 AI（on-device AI）競賽的方向，值得留意後續蘋果自家 AI 策略會如何調整。",
      source: "unrot.co",
      url: "https://unrot.co/blogs/today-top-10-ai-news-july-13-2026"
    },
    {
      date: "2026-06-29",
      stars: 3,
      category: "開源",
      title: "美團開源 1.6 兆參數模型 LongCat-2.0，訓練全程未用美系晶片",
      summary: "中國美團於 6 月 29 日以 MIT 授權開源 LongCat-2.0，這是一款 1.6 兆參數的混合專家（MoE）模型，平均每個 token 啟用 480 億參數，支援原生百萬 token 上下文，訓練完全使用中國自製 ASIC 晶片、未使用任何美系限制晶片；在 SWE-bench Pro 測試中以 59.5% 的成績略勝 GPT-5.5 的 58.6%。",
      why: "這則新聞讓你了解開源模型與晶片自主化的最新進展，是掌握全球 AI 產業格局變化的重要拼圖。",
      source: "綜合外媒報導",
      url: "https://news.ycombinator.com/front"
    }
  ],
  archive: [
    {
      date: "2026-07-13",
      stars: 5,
      category: "工具",
      title: "Notion Custom Agents 大擴充，Claude、Cursor 成首批「外部代理」正式上線",
      summary: "Notion 為 Custom Agents 新增 Mercury、Mixpanel、Miro、Box、ClickHouse 五個連接器，並開放 Worker 跨團隊共用；Claude 與 Cursor 成為首批可端對端接手工作流程的 External Agent，AI 會議記錄也升級為依麥克風判斷發言人。Notion MCP 使用量近一個月成長 10 倍。",
      why: "如果你在 Notion 做知識管理，這代表 Claude 之後能更深入地接手你的頁面整理、任務串接與流程自動化，是生產力工具與 AI 代理結合的重要進展。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/"
    },
    {
      date: "2026-07-10",
      stars: 5,
      category: "OpenAI",
      title: "OpenAI 發布 ChatGPT Work 與 GPT-5.6，正式進軍企業「超級助理」市場",
      summary: "OpenAI 於 7 月 9 日推出 GPT-5.6（分三種尺寸）及 ChatGPT Work，將 Codex 整合進 ChatGPT 桌面版，並提供 15 項整合的外掛目錄與網站建置功能。ChatGPT Work 先開放 Pro、Enterprise、Edu 用戶，之後擴及 Plus、Business。",
      why: "ChatGPT Work 主打「一站式代理型生產力」，跟 Cowork、Claude Code 的定位相近，值得比較功能差異，評估是否值得納入日常工作流。",
      source: "CGTN",
      url: "https://news.cgtn.com/news/2026-07-10/OpenAI-unveils-super-app-as-rivalry-with-Anthropic-intensifies-1OF7nrvaglG/p.html"
    },
    {
      date: "2026-07-12",
      stars: 4,
      category: "Google",
      title: "Gemini 3.5 Pro 將於 7/17 全面上市，200 萬 token 上下文創新高",
      summary: "Google DeepMind 的 Gemini 3.5 Pro 預計 7 月 17 日正式開放，具備 200 萬 token 上下文視窗（現有前沿模型的兩倍），並提供需訂閱每月 250 美元 Ultra 方案才能使用的 Deep Think 深度推理模式。此次發布落在 GPT-5.6、Grok 4.5 之後，是 AI 界近期最密集的競爭週。",
      why: "超大上下文代表能一次丟進更多文件、長對話或整個知識庫做分析，若你常需要處理大量資料，可留意 Gemini 3.5 Pro 上市後的實測評比。",
      source: "buildfastwithai",
      url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-12-2026"
    },
    {
      date: "2026-07-13",
      stars: 4,
      category: "開源",
      title: "n8n 上半年新增逾 35 個節點，AI Agent 節點全面重構支援多模型",
      summary: "n8n 在 2026 上半年新增超過 35 個節點，包括 Anthropic Claude、Google Gemini、Perplexity、ElevenLabs、Groq 專用節點；AI Agent 節點重構後可跨 Claude、GPT-4o、Gemini、Mistral 做工具呼叫，並推出支援分組節點群的空間化 Canvas 介面。",
      why: "你在用 n8n 做自動化，這波更新代表串接更多 AI 模型與服務會更省事，值得找時間試試新的 AI Agent 節點跟 Canvas 介面。",
      source: "Nodesify",
      url: "https://nodesify.com/blog/n8n-workflow-automation-guide-2026"
    },
    {
      date: "2026-07-13",
      stars: 3,
      category: "Anthropic",
      title: "Anthropic 推出「反思儀表板」測試版，幫用戶檢視 AI 使用習慣",
      summary: "Anthropic 為 Claude 推出 Beta 反思儀表板，協助用戶追蹤、視覺化並回顧自己的使用模式，可設定免打擾時段，並提供更有意圖地使用 AI 的洞察與提示。目前開放給有開啟 Memory 功能的 Free、Pro、Max 用戶，網頁版與桌面版皆可用。",
      why: "與其埋頭一直用 AI，不如偶爾回顧自己是怎麼用的——這個功能很適合想建立健康 AI 使用習慣、避免過度依賴的人試試看。",
      source: "Anthropic Newsroom",
      url: "https://www.anthropic.com/news"
    },
    {
      date: "2026-07-07",
      stars: 4,
      category: "Anthropic",
      title: "Claude Fable 5 全球重新開放，Claude Mythos 5 開放部分美國企業試用",
      summary: "隨著出口管制鬆綁，Anthropic 重新在全球開放 Claude Fable 5 的存取權限，同時將仍在測試中的 Claude Mythos 5 開放給部分美國企業組織試用，顯示 Anthropic 在地緣政治限制放鬆後加快旗艦模型的全球佈局。",
      why: "日後在 Claude Platform 或各方案上若看到 Fable 5、Mythos 5 選項，代表能接觸到 Anthropic 目前最前沿的模型陣容，可以持續留意何時開放給一般帳號。",
      source: "AI Weekly",
      url: "https://aiweekly.co/ai-news-today/anthropic-news"
    },
    {
      date: "2026-07-03",
      stars: 4,
      category: "開源",
      title: "個人 AI 助理 OpenClaw 狂飆破 21 萬星，本地優先浪潮成形",
      summary: "主打完全在自己裝置上執行的開源個人 AI 助理 OpenClaw，自年初爆紅以來持續狂飆，數天內從 9,000 星衝上 6 萬星，如今累計已突破 21 萬顆 GitHub star。它可作為本地閘道，串接 WhatsApp、Telegram、Slack、Discord、Signal、iMessage 等 50 多種服務，資料不需交給雲端。",
      why: "想玩自動化、跨平台整合（類似 n8n 的串接思路）的人，可以觀察這種本地優先、隱私優先架構的設計取捨，說不定能搬進自己的工作流。",
      source: "DEV Community",
      url: "https://dev.to/sonotommy/10-best-open-source-ai-agents-for-2026-2l6p"
    },
    {
      date: "2026-07-01",
      stars: 4,
      category: "Google",
      title: "Gemini Spark 桌面版登陸 Mac，搶攻代理式助理戰場",
      summary: "Google 將代理式助理 Gemini Spark 帶到 macOS 桌面版，新增即時主題追蹤、串接 Google Tasks 與 Google Keep 等功能，正面迎戰 Claude Desktop、Microsoft Copilot、OpenClaw 等桌面 AI 助理。",
      why: "桌面型 AI 助理的競爭會直接牽動日常工具選擇，可以比較看看 Gemini Spark 跟慣用的 Claude、Cowork 工作流程差在哪裡。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/07/01/gemini-spark-googles-agentic-assistant-is-now-available-on-mac/"
    },
    {
      date: "2026-07-07",
      stars: 3,
      category: "產業",
      title: "微軟悄悄用自研 MAI 模型取代 Excel、Outlook 裡的 OpenAI、Anthropic",
      summary: "彭博社報導，微軟開始在 Excel、Outlook 等軟體中，把原本呼叫 OpenAI、Anthropic 的部分請求改由自研 MAI 模型處理，目前每週已有數萬次提示由 MAI 完成，顯示微軟正加速降低對外部 AI 供應商的依賴。",
      why: "平常工作用的 Office 全家桶背後模型正在悄悄換血，了解這類供應鏈調整，有助於判斷未來工具選擇與體驗落差。",
      source: "Bloomberg",
      url: "https://www.bloomberg.com/news/articles/2026-07-07/microsoft-replaces-openai-anthropic-with-own-ai-in-some-apps"
    },
    {
      date: "2026-07-07",
      stars: 3,
      category: "政策",
      title: "伊利諾州跟進紐約、加州，要求主要 AI 模型接受第三方安全稽核",
      summary: "伊利諾州於 7 月 7 日跟進紐約、加州腳步，要求主要 AI 模型開發商揭露安全措施並通報重大安全事件，並自 2027 年起須接受獨立第三方安全稽核。",
      why: "各州陸續立法規範 AI 安全揭露，代表 AI 治理正從自願性準則走向強制稽核，是觀察 AI 產業合規走向的重要指標。",
      source: "iThome",
      url: "https://www.ithome.com.tw/news"
    },
    {
      date: "2026-07-01",
      stars: 5,
      category: "工具",
      title: "Notion 大改版：多代理協作工作流，Claude 成首批「外部代理」",
      summary: "Notion 於 7 月 1 日推出多項 AI Agent 更新：team 可共用的多代理工作流、支援外部代理接入、會議記錄自動標註講者、更完整的 Microsoft 檔案處理、互動式 HTML 區塊、Outlook 自動化，以及更多 MCP 連接。Claude 與 Cursor 是首批加入的「External Agent」，可直接在 Notion 工作區內接手端對端流程。",
      why: "如果你已經在用 Notion 做知識管理，這代表 Claude 之後能直接在你的 Notion 頁面裡自動整理、寫作、串接任務，是生產力工具與 AI 代理結合的重要指標。",
      source: "n8n / Notion 官方更新",
      url: "https://n8n.io/integrations/notion/and/openai/"
    },
    {
      date: "2026-07-03",
      stars: 4,
      category: "Anthropic",
      title: "Claude Sonnet 5 成為 Claude Code 預設模型，原生 100 萬 token 上下文",
      summary: "Anthropic 宣布 Claude Sonnet 5 現為 Claude Code 的預設模型，具備原生 100 萬 token 上下文視窗，優惠價格為每百萬 token 輸入 $2、輸出 $10，優惠期至 8 月 31 日。同時 Cowork 排程任務、企業級 MCP 連接器管理與花費門檻提醒等功能也一併更新。",
      why: "你正在用的 Cowork 與 Claude Code 背後模型升級了，超大上下文代表能一次處理更多檔案與長對話，值得留意定價優惠視窗。",
      source: "Anthropic Newsroom",
      url: "https://www.anthropic.com/news"
    },
    {
      date: "2026-07-05",
      stars: 4,
      category: "Google",
      title: "Google 擴大開放 Gemini 個人化 AI 圖像生成功能",
      summary: "Google 向更多美國用戶免費開放 Gemini 的個人化圖像生成功能，會擷取使用者已連結的 Gmail、Google Photos、YouTube 與搜尋紀錄，在不需詳細下指令的情況下產出貼合個人興趣的圖片。",
      why: "展示了「連結個人資料 + AI 生成」的新工具方向，如果你有 Google 帳號生態，可以直接體驗這種免詳細 prompt 的圖像生成方式。",
      source: "AI Weekly",
      url: "https://aiweekly.co/ai-news-today/google-ai-news"
    },
    {
      date: "2026-07-04",
      stars: 3,
      category: "政策",
      title: "Anthropic 堵住中國企業經由代理服務存取 Claude 的漏洞",
      summary: "報導指出 Anthropic 正在關閉讓 Ant Group 等中國企業透過中繼服務與雲端供應商間接存取 Claude 的漏洞管道，強化模型使用的合規與地緣政治風險控管。",
      why: "反映 AI 大廠在地緣政治壓力下，正加強模型存取的合規審查，這類治理趨勢會逐漸影響一般企業用戶的使用條款。",
      source: "AIToolsRecap",
      url: "https://aitoolsrecap.com/Blog/AINewsJuly2026.aspx"
    },
    {
      date: "2026-07-02",
      stars: 3,
      category: "職涯",
      title: "Meta 內部坦承 AI 代理專案停滯 4 個月，Zuckerberg 公開承認落後",
      summary: "在 7 月 2 日的 Meta 全員大會上，Zuckerberg 坦承公司 AI 代理專案已停滯四個月，幾分鐘後其 AI 主管卻宣稱未發布的 Watermelon 模型已追上 GPT-5.5，說法前後矛盾，引發內部與外界質疑。",
      why: "即使是 Meta 這樣的巨頭，AI 代理落地也充滿波折——提醒我們評估任何 AI 工具承諾時，都該保持務實與查證的態度。",
      source: "BuildFastWithAI",
      url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-4-2026"
    },
    {
      date: "2026-06-26",
      stars: 5,
      category: "OpenAI",
      title: "OpenAI 發布 GPT-5.6：Sol / Terra / Luna 三模型分級",
      summary: "GPT-5.6 以三個模型推出：旗艦 Sol（$5/$30）、平衡型 Terra（$2.50/$15）、快速平價 Luna（$1/$6）。這是史上第一次在美國政府明確協調下進行的 AI 模型發布，API 全面開放預計 7 月中下旬。",
      why: "Terra 定價與 Claude Sonnet 4.6 持平、效能接近 GPT-5.5，可能成為最多人採用的主力模型。選 AI 工具時可先觀望 7 月中的實測評比。",
      source: "BuildFastWithAI",
      url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-1-2026"
    },
    {
      date: "2026-07-03",
      stars: 4,
      category: "Anthropic",
      title: "Anthropic 營收超越 OpenAI，預計 2029 年獲利",
      summary: "報導指出 Anthropic 營收已超越 OpenAI，5 月時預估年營收將達 470 億美元，並預計 2029 年轉虧為盈（比 OpenAI 早一年）。同時諾貝爾化學獎得主 John Jumper（AlphaFold2 共同開發者）宣布離開 Google DeepMind 加入 Anthropic。",
      why: "AI 雙強格局成形，Claude 生態系（含 Claude Code、Cowork）持續壯大，值得持續投資學習。",
      source: "AIToolsRecap / Fortune",
      url: "https://aitoolsrecap.com/Blog/ai-news-july-3-2026"
    },
    {
      date: "2026-07-03",
      stars: 4,
      category: "政策",
      title: "白宮與三大 AI 廠商磋商「自願性 AI 發布標準」",
      summary: "白宮正與 OpenAI、Google、Anthropic 進行後期磋商，建立自願性 AI 模型發布標準，最快下週宣布。OpenAI 另提議讓美國政府取得 5% 股份（估值約 426 億美元）。",
      why: "政府介入 AI 發布流程將影響未來新模型的推出節奏與可用性，是 AI 產業的結構性轉變。",
      source: "AIToolsRecap",
      url: "https://aitoolsrecap.com/Blog/ai-news-july-3-2026"
    },
    {
      date: "2026-07-04",
      stars: 4,
      category: "職涯",
      title: "美國 6 月就業僅增 5.7 萬，AI 加速取代初階知識工作",
      summary: "美國勞工統計局 6 月報告顯示新增就業僅 57,000 人，分析指出 AI 工具正以加速度取代入門級知識型工作。",
      why: "這正是本站存在的理由——持續學習 AI 工具、把 AI 變成自己的槓桿，而不是被取代的對象。",
      source: "BuildFastWithAI",
      url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-4-2026"
    },
    {
      date: "2026-07-01",
      stars: 3,
      category: "xAI",
      title: "Grok 4.5 於 SpaceX 與 Tesla 內部私測中",
      summary: "xAI 的 Grok 4.5 目前在 SpaceX 和 Tesla 進行私有測試，尚未公開發布時程。",
      why: "追蹤即可，暫不需行動。xAI 模型迭代速度快，但工作應用生態仍以 OpenAI / Anthropic / Google 為主。",
      source: "BuildFastWithAI",
      url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-3-2026"
    }
  ]
};

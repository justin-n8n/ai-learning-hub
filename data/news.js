// 每日 AI 新聞資料檔 —— 由 Cowork 排程自動更新
// 格式：{date, stars(1-5), category, title, summary, why, source, url}
window.SITE_NEWS = {
  lastUpdated: "2026-07-06",
  picks: [
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
    }
  ],
  archive: [
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

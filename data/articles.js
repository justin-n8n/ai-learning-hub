// 大神文章區資料檔 —— 每週排程自動抓取新文章 + AI 摘要
// leaders: 追蹤名單（可自行增減）；articles: 自動抓取的文章摘要
window.SITE_ARTICLES = {
  lastUpdated: "2026-07-06",
  leaders: {
    intl: [
      { name: "Ethan Mollick", outlet: "One Useful Thing", focus: "AI 在工作與學習的實際應用，最適合非工程師", url: "https://www.oneusefulthing.org/" },
      { name: "Simon Willison", outlet: "simonwillison.net", focus: "LLM 實測、工具剖析，實戰派", url: "https://simonwillison.net/" },
      { name: "Andrej Karpathy", outlet: "X / YouTube", focus: "深度學習思想領袖，業界指標", url: "https://karpathy.ai/" },
      { name: "The Rundown AI", outlet: "每日電子報", focus: "全球最大 AI 日報（200萬+訂閱）", url: "https://www.therundown.ai/" },
      { name: "TLDR AI", outlet: "每日電子報", focus: "精簡快報", url: "https://tldr.tech/ai" },
      { name: "Dan Shipper", outlet: "Chain of Thought (Every)", focus: "AI 改變工作與生活的深度隨筆", url: "https://every.to/chain-of-thought" },
      { name: "AlphaSignal", outlet: "技術週報", focus: "GitHub 趨勢與研究（選讀）", url: "https://alphasignal.ai/" }
    ],
    zh: [
      { name: "雷蒙三十（侯智薰）", outlet: "raymondhouch.com", focus: "Notion / Heptabase / n8n 自動化 ⭐ 與你興趣對口", url: "https://raymondhouch.com/" },
      { name: "電腦玩物（Esor）", outlet: "esor.tw", focus: "生產力工具與數位工作術老字號", url: "https://esor.tw/" },
      { name: "閱讀前哨站（瓦基）", outlet: "readingoutpost.com", focus: "筆記工具、學習方法", url: "https://readingoutpost.com/" },
      { name: "Brief AI 電子報", outlet: "每日快報", focus: "繁中圈最具影響力 AI 快報", url: "https://ai.briefnewsletter.com/" },
      { name: "曼報（Manny Li）", outlet: "電子報+Podcast", focus: "商業 × 科技深度分析", url: "https://manny-li.com/" },
      { name: "知勢（AIF）", outlet: "edge.aif.tw", focus: "台灣 AI 產業觀點", url: "https://edge.aif.tw/" }
    ],
    youtube: [
      { name: "Matt Wolfe", focus: "AI 工具評測與新聞，工具導向", url: "https://www.youtube.com/@mreflow" },
      { name: "AI Explained", focus: "深度冷靜的模型能力分析", url: "https://www.youtube.com/@aiexplained-official" },
      { name: "雷蒙三十", focus: "中文生產力工具 + AI 自動化教學", url: "https://www.youtube.com/@raymondhouch" }
    ]
  },
  // 自動抓取的文章 —— {date, author, title, points:[], verdict, url}
  articles: [
    {
      date: "2026-07-05",
      author: "Simon Willison",
      title: "花 $149 讓 Claude Fable 幫忙把 sqlite-utils 改到 4.0 正式版",
      points: [
        "作者在 Claude Max 訂閱只剩幾天可用 Fable 模型的期限前，決定拿它衝刺一個他一直想做好的大版本更新",
        "他堅持遵守 SemVer，希望不相容的重大版本盡量少發生，於是讓 Fable 完整檢查並修正 API 破壞性變更",
        "整個過程附上實際花費（約 $149.25），提供了「AI 協作寫開源套件」實際成本的具體參考",
        "顯示即使是資深工程師，也把頂級模型當作有限資源在精打細算地使用"
      ],
      verdict: "偏技術向，但「用金錢量化 AI 協作成本」的思路對任何想估算 AI 使用預算的人都有參考價值",
      url: "https://simonwillison.net/2026/Jul/5/sqlite-utils-fable/"
    },
    {
      date: "2026-07-04",
      author: "Simon Willison（引述 Armin Ronacher）",
      title: "模型越強，反而越不聽話？Opus 4.8 呼叫工具時亂加欄位的怪現象",
      points: [
        "Armin Ronacher 發現新版 Claude（Opus 4.8、Sonnet 5）呼叫自訂編輯工具時，會自己捏造 schema 裡沒有的欄位，導致呼叫被拒絕",
        "反而是較舊的 Claude 模型不會有這個問題，暗示新模型可能被特別訓練去配合 Claude Code 內建工具的用法",
        "這意味著第三方工具（非 Claude Code 官方工具）可能因此「相容性變差」，即使模型本身更聰明",
        "引出一個值得深思的問題：AI 廠商優化自家工具鏈的同時，是否會犧牲對外部生態的相容性"
      ],
      verdict: "如果你有在用 AI 編程工具或自動化串接 LLM API，這篇提醒你留意模型升級可能帶來的相容性風險",
      url: "https://simonwillison.net/2026/Jul/4/better-models-worse-tools/"
    },
    {
      date: "2026-06-30",
      author: "Ethan Mollick",
      title: "聊天機器人的黃昏：AI 工作模式正在質變",
      points: [
        "Mollick 認為「打開視窗、輸入問題、等待回答」這種聊天機器人式互動正在退場",
        "取而代之的是能自主規劃、長時間執行任務的 Agent（如 Claude Code、Cowork 這類工具）",
        "工作方式的改變速度呈指數型加快，習慣舊模式的人會愈來愈跟不上",
        "建議讀者盡早開始練習「交付目標、而非逐步下指令」的協作方式"
      ],
      verdict: "值得精讀——這是理解「為什麼 Cowork/Claude Code 這類代理工具值得投入學習」的核心論述",
      url: "https://www.oneusefulthing.org/p/the-twilight-of-the-chatbots"
    }
  ]
};

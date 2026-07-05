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
  articles: []
};

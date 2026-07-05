// 生產力工具區資料檔 —— 每週排程追蹤官方更新與熱門教學
window.SITE_PRODUCTIVITY = {
  lastUpdated: "2026-07-06",
  tools: [
    {
      name: "Notion",
      tagline: "All-in-one 筆記與專案管理",
      body: "資料庫、看板、行事曆、文件協作一站搞定。Notion AI 可直接在頁面內寫作、摘要、翻譯、自動填表。適合：專案管理、個人儀表板、團隊知識庫。",
      ai: "Notion AI：頁面內生成內容、Q&A 問自己的筆記、資料庫自動填充",
      resources: [
        { label: "雷蒙三十 Notion 教學（繁中最完整）", url: "https://raymondhouch.com/notion/" },
        { label: "Notion 官方指南", url: "https://www.notion.so/help/guides" }
      ]
    },
    {
      name: "Heptabase",
      tagline: "視覺化卡片筆記，深度學習神器",
      body: "台灣團隊開發的白板式筆記工具，把想法寫成卡片、在無限白板上連結整理，特別適合學習複雜主題與研究。與本站「學 AI」的目標絕配——學到的概念做成卡片、建立知識地圖。",
      ai: "內建 AI 輔助整理與摘要卡片；可搭配 Claude 深入討論卡片內容",
      resources: [
        { label: "雷蒙三十 Heptabase 專區", url: "https://raymondhouch.com/tag/heptabase/" },
        { label: "閱讀前哨站評測", url: "https://readingoutpost.com/is-heptabase-better/" },
        { label: "官方網站", url: "https://heptabase.com" }
      ]
    },
    {
      name: "Obsidian",
      tagline: "本機優先的雙向連結筆記",
      body: "資料存自己電腦、Markdown 格式永不被綁架，外掛生態龐大。適合：重視資料自主權、想打造個人知識庫的人。學習曲線比 Notion 陡。",
      ai: "社群外掛可接 Claude/GPT API 直接在筆記中用 AI",
      resources: [
        { label: "電腦玩物 Obsidian 教學", url: "https://esor.tw" },
        { label: "官方網站", url: "https://obsidian.md" }
      ]
    },
    {
      name: "n8n",
      tagline: "開源自動化工作流",
      body: "視覺化拉節點做自動化：抓資料 → AI 處理 → 發通知。可自架（免費）或用雲端版。你已連接使用中——本站 Phase 3 的 LINE/Email 推播就會用它。",
      ai: "內建 AI 節點（OpenAI/Claude/本機模型），可做 AI Agent 工作流",
      resources: [
        { label: "雷蒙三十 n8n 自動化課程", url: "https://academy.lifehacker.tw/" },
        { label: "n8n 官方模板庫", url: "https://n8n.io/workflows/" }
      ]
    },
    {
      name: "Raycast",
      tagline: "快捷啟動器 + AI 指令中心（Mac）",
      body: "一個快捷鍵呼叫所有工具：搜尋、剪貼簿歷史、視窗管理、AI 對話。Windows 版已推出。適合：追求鍵盤流效率的人。",
      ai: "Raycast AI：全域快捷鍵呼叫 AI，選字即問",
      resources: [
        { label: "官方網站", url: "https://www.raycast.com" }
      ]
    }
  ]
};

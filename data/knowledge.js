// AI 知識庫資料檔 —— 每週排程檢查官方更新日誌，有變動時自動改寫並標記更新日期
window.SITE_KNOWLEDGE = {
  lastUpdated: "2026-07-06",
  basics: [
    { term: "LLM（大型語言模型）", en: "Large Language Model", body: "以海量文字訓練出的 AI 模型，能理解與生成自然語言。ChatGPT、Claude、Gemini 背後都是 LLM。它的本質是「預測下一個字」，但規模夠大後湧現出推理、翻譯、寫程式等能力。" },
    { term: "Token（詞元）", en: "Token", body: "LLM 處理文字的最小單位。一個中文字約 1~2 個 token，英文單字約 1~1.3 個。API 計費、模型輸入長度限制都以 token 計算。" },
    { term: "Context Window（上下文窗口）", en: "Context Window", body: "模型一次能「記住」的內容長度。超過範圍的早期對話會被遺忘。目前主流模型多在 20 萬 token 以上，可容納整本書的內容。" },
    { term: "提示詞工程", en: "Prompt Engineering", body: "設計輸入指令讓 AI 產出更好結果的技巧。核心原則：明確具體、給範例、要求步驟推理、指定格式與長度。這是不用寫程式就能大幅提升 AI 效果的第一技能。" },
    { term: "RAG（檢索增強生成）", en: "Retrieval-Augmented Generation", body: "讓 AI 回答前先從你的資料庫檢索相關內容再生成答案。好處：知識即時更新、可附來源、減少幻覺。企業知識庫問答幾乎都用 RAG。" },
    { term: "AI Agent（AI 代理）", en: "AI Agent", body: "能自主規劃步驟、呼叫工具、執行多步驟任務的 AI。與聊天機器人的差別：你給目標，它自己想辦法完成（如 Claude Code、Cowork）。2025-2026 年 AI 發展的主軸。" },
    { term: "MCP（模型上下文協定）", en: "Model Context Protocol", body: "Anthropic 推出的開放標準，讓 AI 能安全連接外部工具與資料（如行事曆、資料庫、Slack）。可理解為「AI 的 USB 接口」，已成為業界通用標準。" },
    { term: "AI 幻覺", en: "Hallucination", body: "AI 一本正經地說錯話——生成看似合理但不正確的內容。對策：要求附來源、用 RAG、重要資訊必查證原文。" },
    { term: "微調 vs 提示工程", en: "Fine-tuning vs Prompting", body: "提示工程：不改模型，靠指令優化輸出，便宜靈活。微調：用特定資料再訓練模型，精準但昂貴。一般使用者 99% 的情況用提示工程就夠。" }
  ],
  platforms: [
    {
      name: "Claude（Anthropic）",
      updated: "2026-07-06",
      body: "模型系列：Fable/Opus（最強）、Sonnet（平衡主力）、Haiku（快速平價）。特色功能：Projects（個人知識庫）、Artifacts（即時生成互動內容）、Claude Code（終端機編程代理）、Cowork（桌面自動化代理）。強項：長文處理、繁中品質、程式開發、代理任務。",
      learn: "入門：直接用 claude.ai 對話 → 進階：建立 Project 放入自己的資料 → 高階：Cowork 排程自動化"
    },
    {
      name: "ChatGPT / GPT 系列（OpenAI）",
      updated: "2026-07-06",
      body: "最新 GPT-5.6 分三級：Sol（旗艦）、Terra（平衡）、Luna（快速）。特色功能：GPTs（自訂機器人商店）、Canvas（協作編輯）、Sora（影片生成）、深度研究。強項：生態系最大、外掛與整合最多。",
      learn: "入門：免費版日常問答 → 進階：GPTs 商店找現成工具 → 高階：API 串接自動化"
    },
    {
      name: "Gemini（Google）",
      updated: "2026-07-06",
      body: "與 Google 全家桶深度整合（Gmail、Docs、試算表）。特色：NotebookLM（研究神器，免費）、AI Studio（開發者平台）、超長上下文。強項：多模態、Google 服務整合、免費額度大方。",
      learn: "入門：NotebookLM 上傳文件做摘要 → 進階：Gemini in Workspace 處理郵件文件"
    },
    {
      name: "開源模型（Llama / Qwen / DeepSeek / Mistral）",
      updated: "2026-07-06",
      body: "可免費下載、本機執行的模型。適合：資料不能上雲的場景、想深入研究、零成本實驗。用 Ollama 或 LM Studio 可以在自己電腦一鍵執行。品質已接近商用模型，但需要較好的硬體。",
      learn: "入門：安裝 LM Studio 跑小模型體驗 → 進階：Ollama + n8n 建本機自動化"
    }
  ],
  compare: {
    updated: "2026-07-06",
    note: "價格與功能變動快，以官方頁面為準",
    rows: [
      ["定位", "Claude", "ChatGPT", "Gemini"],
      ["最適合", "長文/文件/程式/代理", "泛用/生態系/創意", "Google 整合/研究"],
      ["免費版", "有（額度制）", "有（額度制）", "有（大方）"],
      ["付費月費", "約 $17-20 起", "約 $20 起", "約 $19 起"],
      ["殺手級功能", "Cowork、Claude Code", "GPTs、Sora", "NotebookLM"]
    ]
  }
};

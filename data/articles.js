// 大神文章區資料檔 —— 每週排程自動抓取新文章 + AI 摘要
// leaders: 追蹤名單（可自行增減）；articles: 自動抓取的文章摘要
window.SITE_ARTICLES = {
  lastUpdated: "2026-07-20",
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
      date: "2026-07-20",
      author: "Dan Shipper（Every／Chain of Thought）",
      title: "GPT-5.6 如何改變知識工作：別再「做」工作，去「照料」你的迴圈",
      points: [
        "GPT-5.6 Sol（在 ChatGPT Work，前身 Codex）能可靠地跑完整套知識工作迴圈，而不只是逐項任務協助",
        "作者提出「知識工作三步迴圈」：蒐集資訊、做決策採取行動、從結果中學習，AI 接手其中大部分執行工作，人只需守住判斷與批准的關卡",
        "舉例包括用 AI 掃收件匣、招募篩選、公司會議與 Slack 摘要、找房家具比價等，每輪結束後 AI 會從你的修改中學習偏好",
        "Every 團隊開源了一個叫 Tend 的 prompt／repo，讓讀者能自己動手把收件匣、招募流程或客服佇列改造成可「照料」的系統"
      ],
      verdict: "值得精讀——適合想把 AI 從單次問答工具升級成日常工作系統的管理者、內容團隊與個人工作者",
      url: "https://every.to/chain-of-thought/how-gpt-5-6-changes-knowledge-work"
    },
    {
      date: "2026-07-20",
      author: "Simon Willison",
      title: "誰在怕中國模型？從蒸餾之爭看美國開源 AI 的政策難題",
      points: [
        "Simon 轉引 Ben Thompson（Stratechery）觀點：美國各大模型廠一邊靠未授權資料訓練，一邊用條款禁止別人蒸餾自家模型，這種雙重標準值得檢討",
        "Thompson 建議美國應立法明確「訓練資料屬合理使用」，並禁止禁止蒸餾的服務條款，讓開放創新能延續",
        "文中提到阿里巴巴一改先前不開源 Qwen 3.7 Max 的決定，轉而開源 Qwen 3.8 Max，可能與近期鼓勵開源合作的談話有關",
        "反映中美 AI 開源策略的角力正牽動整個產業的模型競爭格局"
      ],
      verdict: "適合想理解「開源 vs 閉源」政策辯論、以及中美 AI 模型競爭態勢的讀者，屬產業觀察短評，5 分鐘可讀完",
      url: "https://simonwillison.net/2026/Jul/20/afraid-of-chinese-models/"
    },
    {
      date: "2026-07-19",
      author: "Simon Willison（引述 Nik Suresh）",
      title: "AI 狂熱正在摧毀企業的決策品質",
      points: [
        "Simon 轉引 Nik Suresh 的觀察，描述大型企業顧問案中瀰漫的「AI 狂熱」如何扭曲決策",
        "匿名案例：某高管從未用過任何 AI 工具，卻主導了一份完全圍繞 AI 的、涉及 20 億美元營收的技術策略",
        "另有工程師坦言為了保住飯碗，被迫把整個 Go 專案交給 AI 重寫成 Zig",
        "文中揭露供應商高管明知客戶「100 倍生產力」的說法誇大，卻不敢反駁，因為反駁可能被視為攻擊客戶、導致合約取消"
      ],
      verdict: "值得一讀的警世短文，適合企業主管、顧問或任何想避免被 AI 炒作牽著走做決策的人",
      url: "https://simonwillison.net/2026/Jul/19/ai-mania/"
    },
    {
      date: "2026-07-16",
      author: "閱讀前哨站（瓦基）",
      title: "《工作流改造術》讀後心得：工作流順暢的關鍵，是先從「放大成果」開始",
      points: [
        "瓦基專訪《高效人生工作法圖解》作者、電腦玩物站長 Esor 與專案管理專家趙胤丞，談如何把上百本生產力經典濃縮成可執行的工作流程",
        "Esor 強調生產力的本質是「產出」，趙胤丞則把成果拆成三層次：完成、帶來結果、能持續累積",
        "分享「關鍵路徑法」搭配番茄鐘，幫助從救火式忙碌中找出每天最重要的一步",
        "Esor 示範用 ChatGPT 每天早上自動整理收件匣、寫回信草稿，並用 Codex 打造專屬 AI 工作教練，越用越懂你的工作習慣",
        "建議新手從「復盤」與「放大成果」切入，而不是急著學一整套方法論"
      ],
      verdict: "非常值得精讀，適合正在嘗試把 GTD、卡片盒筆記等方法論與 AI 助理結合、卻覺得工作依然凌亂的職場工作者",
      url: "https://readingoutpost.com/productivity-methods-illustrated-guide/"
    },
    {
      date: "2026-07-12",
      author: "雷蒙三十（侯智薰）",
      title: "雷蒙週報 #184：上半年總結、免費開源「說人話」去 AI 味寫作 SKILL、AI Agent 該不該換家",
      points: [
        "免費開源釋出「說人話」（speak-human-tw）SKILL，能抓出中文文章 35 種以上的「AI 寫作痕跡」並給改寫建議，可直接整合進個人內容工作流",
        "分享與強模型協作心法：不要把「該怎麼做」寫死進提示詞，讓 AI 保留判斷空間，並把「產出計畫」與「大量執行」分工給不同工具",
        "深入比較 Zeabur 漲價後與 Vercel、Supabase、Cloudflare、Netlify 的取捨，重點在養 Bot、n8n、資料庫等長期服務該怎麼選平台",
        "附上與電腦玩物站長 Esor 直播對談重點整理，談 AI 時代如何用 Agent 接手第二大腦整理工作",
        "記錄 Threads 帳號故障時直接用官方 API 自寫發文介面頂著用，示範工具失靈時如何用 AI 自救"
      ],
      verdict: "值得精讀——「說人話」SKILL 和平台部署比較，很適合正在摸索 AI 寫作與自動化的讀者",
      url: "https://raymondhouch.com/newsletter/184/"
    },
    {
      date: "2026-07-08",
      author: "閱讀前哨站（瓦基）",
      title: "〈AI 瓦基第二大腦〉對談吳淡如：AI 學不來的是你的個性",
      points: [
        "吳淡如是重度 AI 使用者（一天用 AI 8 小時、訂最高階方案），卻靠自己動筆的真實文章賺到創作者分潤，凸顯「AI 磨平一切後，帶稜角的真人反而稀有」",
        "她把自己的畫作餵給 AI 模仿卻學不像，體悟「不完美是個人風格的資產」，作者補充：是磨過技藝後留下的不完美才珍貴",
        "分享工作法：把耗時的 AI 推理過程（13-20 分鐘）拿去運動，把「慢思考」時間從腦袋轉移到身體",
        "吳淡如建議課程命名要凸顯「目的性」而非只是聰明，點出行銷文案設計上的觀察"
      ],
      verdict: "非工具教學文，而是心法分享，適合已在用 AI 工作、想思考「AI 學不會什麼」的讀者",
      url: "https://readingoutpost.com/ai-cannot-learn-your-personality/"
    },
    {
      date: "2026-07-08",
      author: "Simon Willison",
      title: "GPT-Live 登場：ChatGPT 語音模式終於升級",
      points: [
        "OpenAI 換新 ChatGPT 語音模式背後的模型，作者搶先體驗數週後認為進步明顯",
        "遇到需要網路搜尋或深度推理的難題時，會自動把任務轉交背景中的前沿模型處理，同時語音對話不中斷",
        "舊版語音模式知識停留在 2024 年、能力偏弱，新模型讓語音助理重新變得實用",
        "作者提到一個小 bug：模型一度會突然打斷使用者、對非玩笑的話發笑，回報後 OpenAI 已調整改善"
      ],
      verdict: "消費端更新而非深度教學，但點出「語音助理終於堪用」的轉折，適合想用語音跟 AI 討論規劃的人快速瀏覽",
      url: "https://simonwillison.net/2026/Jul/8/introducing-gptlive/"
    },
    {
      date: "2026-07-06",
      author: "Simon Willison",
      title: "sqlite-utils 4.0rc2/rc3 更新：複合外鍵支援與大小寫不敏感欄位",
      points: [
        "作者持續用 Claude Fable 5 與 GPT-5.5 協作，把累積已久的 issue/PR 一次清空，changelog 因此越滾越大",
        "rc3 新增「複合外鍵（compound foreign keys）」的內省與建立支援，屬於不相容的重大變更",
        "新版遵循 SQLite 慣例，將欄位名稱比對改為大小寫不敏感",
        "延續前一天 $149 讓 AI 衝刺大改版的做法，展示 AI coding agent 在真實開源專案中的具體產出"
      ],
      verdict: "偏技術向，適合有在維護開源套件、或想了解 AI 協作實際產出品質的人參考",
      url: "https://simonwillison.net/2026/Jul/6/sqlite-utils/"
    },
    {
      date: "2026-07-02",
      author: "Simon Willison（引述 Geoffrey Litt）",
      title: "「先理解才能參與」：AI 寫的程式碼越滾越大，人跟得上嗎？",
      points: [
        "引用 Geoffrey Litt 在 AI Engineer 大會的核心觀點：Understand to participate（要理解才能參與）",
        "隨著 coding agent 一次能生成的變更越來越大、越複雜，人類理解若跟不上，會累積「認知債務」",
        "唯有對程式碼／內容有足夠深入的理解，才能在與 AI 協作過程中持續發揮創意判斷",
        "提醒即使工具再強，使用者仍需要投入心力「消化」AI 產出，而不是照單全收"
      ],
      verdict: "簡短但點出 AI 協作時代最容易被忽略的風險，不論工程師或一般使用者都值得一讀",
      url: "https://simonwillison.net/2026/Jul/2/understand-to-participate/"
    },
    {
      date: "2026-06-29",
      author: "雷蒙三十（侯智薰）",
      title: "31 歲上半年總結：AI 時代給我的 19 句生活體悟",
      points: [
        "以 19 句短語取代長篇復盤，涵蓋選擇、意義與工作哲學",
        "談 AI 時代的判斷與責任：「AI 可以給你一百個方案，但只有你的判斷能決定要哪個」",
        "分享「輸出即學習」「用日記記錄小念頭」等個人習慣，反映他如何把 AI 融入日常創作流程",
        "文中連結多篇他過去半年的週報，可作為觀察他個人工作法演變的索引"
      ],
      verdict: "偏個人反思而非工具教學，想找生產力乾貨可略過，但作為華文圈少見的「AI 時代生活哲學」文章值得一讀",
      url: "https://raymondhouch.com/yuiraymond/2026-midyear-life-reflections/"
    },
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

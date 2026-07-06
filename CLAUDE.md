# CLAUDE.md — AI 學習中心 專案說明書

> 本檔案記錄「AI 學習中心」網站的完整設計、建置經過、使用方式與維護方法。
> 未來任何 Claude 工作階段讀到此檔，即可接手維護本專案。

**建置日期**：2026-07-05 ~ 2026-07-06
**專案擁有者**：Justin（非工程師，興趣領域：生產力工具 Notion/Heptabase、AI 工具實務應用、n8n/Cowork 自動化）
**線上網址**：https://justin-n8n.github.io/ai-learning-hub/
**GitHub Repo**：https://github.com/justin-n8n/ai-learning-hub（帳號 justin-n8n）
**本機位置**：`C:\Users\justi\Desktop\AI工具\ai-learning-hub\`

---

## 一、專案是什麼

一個**個人 AI 學習入口網站**：由 Cowork 排程自動收集 AI 資訊，AI 預先篩選、評分、產出繁中摘要，使用者只需閱讀「值得看」的精華，解決 AI 資訊爆炸與學習焦慮。

核心原則：

1. AI 先篩選，人再閱讀——每日精選限量 5 則，不做資訊瀑布
2. 繁體中文為主，英文內容附中文摘要，專有名詞保留英文
3. 持續自動更新（每日新聞、每週工具/文章/知識庫）
4. 從學習出發——收藏/已讀/筆記功能推著使用者學，不只是看

完整規劃見同資料夾上層的《AI學習網站建置規劃書.md / .html》（v1.1 定稿）。

---

## 二、建置經過（決策紀錄）

1. **需求訪談**：使用者提出 5 大需求——每日 AI 新聞、AI 工具庫（依應用分類+開源精選）、AI 知識庫（自動更新）、生產力工具區、大神文章區。
2. **規劃書**：Claude 撰寫建置規劃書，補充第 6 模組「我的學習」（收藏/已讀/筆記），提醒 FB 無法自動抓取、資訊過載風險、版權界線等。
3. **方案選擇**：比較 4 個部署方案後，選定**方案 D：Cowork 排程 + GitHub Pages**——參考使用者已成功運作的 iPAS 備考網站（ipas-study.github.io/ipas-ai-study）模式。$0 成本、AI 處理由 Cowork 完成、手機可看。
4. **定案決策**：遊戲化不採用；每日精選 5 則；Phase 3 要做 Email/LINE 推播；興趣領域=生產力工具最高權重。
5. **建置**：Claude 寫出網站（純 HTML/JS/CSS，無框架）、初始內容、真實新聞首批 5 則，並設定 2 個排程任務。
6. **部署**：Claude 用 Chrome 瀏覽器自動化：建立 GitHub repo → 上傳檔案 → 開啟 GitHub Pages → 驗證上線成功。

---

## 三、技術架構

```
使用者瀏覽 ──→ GitHub Pages（靜態網站，手機可看）
                    ↑ 資料檔上傳（自動覆蓋同名檔）
Cowork 排程任務 ──→ WebSearch 抓資訊 → AI 篩選/摘要 → 更新本機 data/*.js
                                        → Chrome 自動上傳 GitHub → 網站更新
```

- **無後端、無資料庫、無 API 費用**。網站是純靜態檔案，資料存在 data/*.js。
- **個人紀錄**（收藏/已讀/筆記）存在瀏覽器 localStorage，不上傳雲端。
- **成本**：$0（含在 Claude 訂閱內）。

### 檔案結構

```
ai-learning-hub/
├── CLAUDE.md           # 本檔案（專案說明書）
├── README.md           # 部署與更新簡要說明
├── index.html          # 網站主頁（六大模組 + UI 樣式）
├── app.js              # 前端邏輯（分頁、收藏/已讀、深淺色、AI導師按鈕）
└── data/               # 資料檔（排程更新的對象）
    ├── news.js         # 每日新聞    window.SITE_NEWS
    ├── tools.js        # 工具庫      window.SITE_TOOLS
    ├── knowledge.js    # 知識庫      window.SITE_KNOWLEDGE
    ├── productivity.js # 生產力工具  window.SITE_PRODUCTIVITY
    └── articles.js     # 大神文章    window.SITE_ARTICLES
```

### 資料格式重點

- 每個 data 檔都是 `window.SITE_XXX = {...}` 的 JS 檔（不用 JSON 是為了本機 file:// 開啟不受 CORS 限制）。
- `news.js`：`{lastUpdated, picks:[5則精選], archive:[歷史，最多60則]}`；每則 `{date, stars(1-5), category, title, summary, why, source, url}`。
- `tools.js`：`{lastUpdated, categories:[9大分類], weekly:{week, note, items}, toolVideos:{工具名:[{t,u}]}, toolVideosHistory:{工具名:[{t,u}]}}`。`toolVideos` 是本週新搜到的 YouTube 教學影片（每工具上限 5 支），`toolVideosHistory` 是歷史累積（每工具上限 30 支，超過砍最舊）；兩個 key 都必須涵蓋 categories 裡的全部工具名稱（無新片則為空陣列）。做法比照 iPAS 備考網站（ipas-study.github.io/ipas-ai-study）的教學影片累積機制。
- `articles.js`：`{lastUpdated, leaders:{intl, zh, youtube 追蹤名單}, articles:[文章摘要]}`。
- 修改後務必 `node --check` 驗證語法。

---

## 四、自動更新排程（Cowork Scheduled Tasks）

| 任務 ID | 排程 | 工作內容 |
|---------|------|----------|
| `ai-hub-daily-news` | 每天 08:00 | 搜尋 24-48hr AI 新聞 → 評分篩 5 則精選（繁中摘要+為什麼值得看）→ 更新 news.js（舊聞入 archive）→ Chrome 上傳 GitHub |
| `ai-hub-weekly-update` | 每週一 09:00 | ① GitHub Trending/HF/Product Hunt 精選工具 → tools.js ② 追蹤名單新文章 AI 摘要 → articles.js ③ 檢查三大平台重大更新 → knowledge.js ④ 每個工具搜尋 YouTube 教學影片，合併進 tools.js 的 toolVideos/toolVideosHistory（雙層結構，仿 iPAS 網站）→ Chrome 上傳 GitHub |

**AI 篩選評分維度**：重要度、實用性、相關性（生產力工具最高權重）、學習價值。

**注意事項**：

- 排程執行時電腦需開機並登入 Claude；沒開機下次啟動會補跑。
- 首次執行建議在側邊欄 Scheduled 按「Run now」預先核准權限（搜尋/檔案/瀏覽器）。
- 上傳 GitHub 需 Chrome 保持登入 github.com（帳號 justin-n8n）。
- 排程任務檔案在 `C:\Users\justi\Claude\Scheduled\` 下，可直接檢視/修改 SKILL.md。

---

## 五、日常使用方式

1. **看網站**：開 https://justin-n8n.github.io/ai-learning-hub/ （或本機直接開 index.html——本機版資料可能比線上新，因為排程先更新本機再上傳）。
2. **每天**：看首頁「今日精選」5 則，有興趣按「☆ 收藏」，看完按「標記已讀」。
3. **每週**：看工具庫「本週精選」與大神文章新摘要，挑 1-2 個實際動手玩。
4. **AI 導師**：知識庫/生產力頁面每個條目都有「🤖 呼叫 AI 導師」按鈕，點了會複製設計好的提問 Prompt，貼到 Claude 就能深入學+拿到 10 分鐘小練習。
5. **我的學習**：收藏待學清單 + 已讀紀錄 + 學習筆記（存瀏覽器本機，勿用無痕模式，換裝置不同步）。

---

## 六、維護方法（對 Claude 說就好）

使用者是非工程師，所有維護都透過 Cowork 對 Claude 下指令完成。常見情境：

| 想做什麼 | 怎麼說 |
|----------|--------|
| 加追蹤的大神/頻道 | 「幫我在 AI 學習網站加追蹤 XXX（附連結）」→ Claude 改 articles.js 的 leaders 並上傳 |
| 加/改工具 | 「幫我在工具庫加 XXX」→ Claude 改 tools.js 並上傳 |
| 補某工具的教學影片 | 「幫我幫 XXX 加教學影片」→ Claude 搜尋 YouTube 並更新 tools.js 的 toolVideos |
| 調整興趣權重 | 「以後篩選新聞多注意 XXX 主題」→ Claude 改兩個排程任務的 prompt |
| 改精選數量/排程時間 | 「每日精選改 10 則」「新聞改晚上 8 點更新」→ Claude 更新排程任務 |
| 內容沒更新 | 檢查：①電腦當時是否開機 ②Scheduled 裡任務的執行紀錄 ③Chrome 是否登入 GitHub |
| 手動更新一次 | 到 Scheduled 按該任務「Run now」，或直接叫 Claude 執行一次更新流程 |
| 網站改版/加功能 | 直接描述需求，Claude 改 index.html / app.js 後上傳（改前先本機測試）|

### 手動上傳 GitHub（備援）

若自動上傳失敗：到 https://github.com/justin-n8n/ai-learning-hub → 進入 data 資料夾 → 「Add file → Upload files」→ 拖入更新後的檔案 → Commit changes（同名自動覆蓋）。約 1 分鐘後網站生效。

### 資料備份

所有內容都是純文字檔，GitHub repo 本身就是雲端備份；本機資料夾是第二份。建議偶爾把整個 `ai-learning-hub` 資料夾複製備份。

---

## 七、已知限制與風險

1. **Facebook 無法自動抓取**（平台限制）——改追蹤創作者的部落格/Substack/YouTube；FB 好文可手動貼給 Claude 摘要後加入。
2. **電腦沒開機當天不更新**——隔次開機補跑；若要完全雲端化，未來可升級 GitHub Actions（規劃書方案 B）。
3. **AI 摘要可能有誤**——重要內容以原文連結為準。
4. **localStorage 限制**——收藏/筆記在單一瀏覽器本機；清除瀏覽器資料會消失；線上版和本機版的紀錄是分開的。
5. **來源可能失效**——排程總結會註明抓取失敗的來源，累積失效請叫 Claude 更換來源。

---

## 八、未來規劃（Phase 3 待辦）

- [ ] Email / LINE 每日精選推播（已確認要做；可用 n8n 實作）
- [ ] 全站搜尋
- [ ] 學習路徑（入門→進階課程地圖）
- [ ] 提示詞（Prompt）收藏庫
- [ ] 每週學習回顧週報
- [ ] 實作挑戰（每週 30 分鐘小任務）

---

## 九、版本紀錄

| 日期 | 版本 | 內容 |
|------|------|------|
| 2026-07-05 | 規劃 v1.0 | 建置規劃書討論稿 |
| 2026-07-06 | 規劃 v1.1 | 全部決策定案（方案D、5則、要推播、不遊戲化）|
| 2026-07-06 | 網站 v1.0 | Phase 1 MVP 上線：六大模組、真實新聞首批、2個排程任務、GitHub Pages 部署完成 |
| 2026-07-06 | 網站 v1.1 | 工具庫新增「教學影片」功能：每個工具附 YouTube 教學影片（tools.js 新增 toolVideos/toolVideosHistory），比照 iPAS 網站；ai-hub-weekly-update 排程新增每週自動搜尋與合併步驟 |

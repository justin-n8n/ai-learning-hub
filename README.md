# AI 學習中心

個人 AI 學習網站——自動收集、AI 篩選、持續更新。

## 本機使用

直接用瀏覽器打開 `index.html` 即可。

## 檔案結構

```
ai-learning-hub/
├── index.html          # 網站主頁（六大模組）
├── app.js              # 前端邏輯（收藏/已讀/筆記存 localStorage）
└── data/               # 資料檔（排程自動更新的對象）
    ├── news.js         # 每日 AI 新聞（每日更新）
    ├── tools.js        # AI 工具庫 + 每週精選 + 教學影片(toolVideos/toolVideosHistory)（每週更新）
    ├── articles.js     # 大神文章摘要（每週更新）
    ├── knowledge.js    # 知識庫（每週檢查更新）
    └── productivity.js # 生產力工具（每週檢查更新）
```

## 部署到 GitHub Pages（方案 D）

1. 在 GitHub 建立新 repo（例如 `ai-learning-hub`，可用你現有的 ipas-study 帳號）
2. 上傳本資料夾所有檔案到 repo
3. Settings → Pages → Source 選 `main` branch → Save
4. 幾分鐘後網站上線：`https://<帳號>.github.io/ai-learning-hub/`

之後排程更新資料檔後 push，網站自動更新。

## 自動更新（Cowork 排程）

- **每日**（新聞）：抓取 AI 新聞來源 → AI 評分篩選 5 則精選 → 更新 `data/news.js`（舊精選移入 archive）→ push
- **每週**（工具/文章/知識庫）：GitHub Trending、追蹤名單新文章 → AI 摘要 → 更新 `tools.js` / `articles.js`，檢查各平台官方更新 → 更新 `knowledge.js`；並幫每個工具搜尋 YouTube 教學影片，合併進 `tools.js` 的 `toolVideos`（本週新片）/ `toolVideosHistory`（歷史累積）→ push

排程執行時電腦需開機並登入 Claude；未執行則下次補抓。

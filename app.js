/* AI 學習中心 前端邏輯（無框架、localStorage 本機紀錄） */
(function(){
"use strict";
var LS = {
  get: function(k, d){ try{ return JSON.parse(localStorage.getItem("aihub_"+k)) || d; }catch(e){ return d; } },
  set: function(k, v){ localStorage.setItem("aihub_"+k, JSON.stringify(v)); }
};
var favs = LS.get("favs", {});   // {id: {type,title,url,ts}}
var reads = LS.get("reads", {}); // {id: ts}

function esc(s){ return String(s||"").replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function toast(msg){
  var t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  setTimeout(function(){ t.classList.remove("show"); }, 1600);
}

/* ---------- 主題 ---------- */
window.toggleTheme = function(){
  var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", cur);
  LS.set("theme", cur);
  document.getElementById("themeBtn").textContent = cur === "dark" ? "☀️" : "🌙";
};
(function(){
  var t = LS.get("theme", "light");
  document.documentElement.setAttribute("data-theme", t);
  document.getElementById("themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
})();

/* ---------- 分頁 ---------- */
document.getElementById("tabs").addEventListener("click", function(e){
  var b = e.target.closest("button"); if(!b) return;
  document.querySelectorAll("#tabs button").forEach(function(x){ x.classList.remove("active"); });
  document.querySelectorAll(".page").forEach(function(x){ x.classList.remove("show"); });
  b.classList.add("active");
  document.getElementById("p-"+b.dataset.p).classList.add("show");
  if(b.dataset.p === "my") renderMy();
  if(b.dataset.p === "home") renderCounts();
});

/* ---------- 收藏 / 已讀 ---------- */
window.toggleFav = function(id, type, title, url){
  if(favs[id]){ delete favs[id]; toast("已移除收藏"); }
  else{ favs[id] = {type:type, title:title, url:url, ts:Date.now()}; toast("⭐ 已加入待學清單"); }
  LS.set("favs", favs); refreshBtns(); renderCounts();
};
window.toggleRead = function(id, title){
  if(reads[id]){ delete reads[id]; }
  else{ reads[id] = {title:title, ts:Date.now()}; toast("✅ 已標記已讀"); }
  LS.set("reads", reads); refreshBtns(); renderCounts();
};
function favBtn(id, type, title, url){
  return '<button onclick="toggleFav(\''+id+'\',\''+type+'\',\''+esc(title).replace(/'/g,"\\'")+'\',\''+esc(url)+'\')" data-fav="'+id+'">'+(favs[id]?"⭐ 已收藏":"☆ 收藏")+'</button>';
}
function readBtn(id, title){
  return '<button onclick="toggleRead(\''+id+'\',\''+esc(title).replace(/'/g,"\\'")+'\')" data-read="'+id+'">'+(reads[id]?"✅ 已讀":"○ 標記已讀")+'</button>';
}
function refreshBtns(){
  document.querySelectorAll("[data-fav]").forEach(function(b){
    var on = !!favs[b.dataset.fav];
    b.textContent = on ? "⭐ 已收藏" : "☆ 收藏"; b.classList.toggle("on", on);
  });
  document.querySelectorAll("[data-read]").forEach(function(b){
    var on = !!reads[b.dataset.read];
    b.textContent = on ? "✅ 已讀" : "○ 標記已讀"; b.classList.toggle("read-on", on);
  });
}

/* ---------- 新聞 ---------- */
var N = window.SITE_NEWS || {picks:[],archive:[]};
var allNews = (N.picks||[]).concat(N.archive||[]);
function newsId(n){ return "n_" + n.url.slice(-40).replace(/[^a-z0-9]/gi,""); }
function newsHtml(n){
  var id = newsId(n);
  return '<div class="news-item">' +
    '<div class="news-title"><a href="'+esc(n.url)+'" target="_blank" rel="noopener">'+esc(n.title)+'</a></div>' +
    '<div class="news-meta"><span class="stars">'+"★".repeat(n.stars)+"☆".repeat(5-n.stars)+'</span>' +
    '<span class="badge">'+esc(n.category)+'</span><span>'+esc(n.date)+'</span><span>'+esc(n.source)+'</span></div>' +
    '<div class="news-sum">'+esc(n.summary)+'</div>' +
    '<div class="news-why">💡 '+esc(n.why)+'</div>' +
    '<div class="act-btns">'+favBtn(id,"新聞",n.title,n.url)+readBtn(id,n.title)+'</div></div>';
}
function renderNews(cat){
  var list = allNews.filter(function(n){ return !cat || cat==="全部" || n.category===cat; });
  document.getElementById("newsList").innerHTML = list.map(newsHtml).join("") || '<div class="empty">此分類暫無新聞</div>';
  refreshBtns();
}
(function(){
  var cats = ["全部"];
  allNews.forEach(function(n){ if(cats.indexOf(n.category)<0) cats.push(n.category); });
  document.getElementById("newsCats").innerHTML = cats.map(function(c,i){
    return '<button class="'+(i===0?"active":"")+'">'+esc(c)+'</button>';
  }).join("");
  document.getElementById("newsCats").addEventListener("click", function(e){
    var b = e.target.closest("button"); if(!b) return;
    document.querySelectorAll("#newsCats button").forEach(function(x){ x.classList.remove("active"); });
    b.classList.add("active"); renderNews(b.textContent);
  });
  renderNews("全部");
  document.getElementById("newsDate").textContent = "更新於 " + (N.lastUpdated||"");
  document.getElementById("lastUpdate").textContent = "資料更新：" + (N.lastUpdated||"");
  document.getElementById("homePicks").innerHTML = (N.picks||[]).slice(0,5).map(newsHtml).join("");
  refreshBtns();
})();

/* ---------- 工具庫 ---------- */
var T = window.SITE_TOOLS || {categories:[],weekly:{items:[]}};
function toolHtml(t, catName){
  var id = "t_" + t.name.replace(/[^a-z0-9一-鿿]/gi,"");
  return '<div class="tool-card"><h4><a href="'+esc(t.link)+'" target="_blank" rel="noopener">'+esc(t.name)+'</a><span class="price">'+esc(t.price)+'</span></h4>' +
    '<p>'+esc(t.desc)+'</p><div class="tool-fit">👤 適合：'+esc(t.fit)+'</div>' +
    '<div class="act-btns">'+favBtn(id,"工具",t.name,t.link)+'</div></div>';
}
function renderTools(catId){
  var html = "";
  T.categories.forEach(function(c){
    if(catId && catId!=="all" && c.id!==catId) return;
    html += c.tools.map(function(t){ return toolHtml(t, c.name); }).join("");
  });
  document.getElementById("toolGrid").innerHTML = html;
  refreshBtns();
}
(function(){
  var bar = document.getElementById("toolCats");
  bar.innerHTML = '<button class="active" data-c="all">全部</button>' + T.categories.map(function(c){
    return '<button data-c="'+c.id+'">'+esc(c.name)+'</button>';
  }).join("");
  bar.addEventListener("click", function(e){
    var b = e.target.closest("button"); if(!b) return;
    bar.querySelectorAll("button").forEach(function(x){ x.classList.remove("active"); });
    b.classList.add("active"); renderTools(b.dataset.c);
  });
  renderTools("all");
  var w = T.weekly || {};
  document.getElementById("weeklyTools").innerHTML =
    (w.items && w.items.length)
      ? w.items.map(function(t){ return toolHtml(t,""); }).join("")
      : '<div class="empty">'+esc(w.note||"每週排程啟用後自動更新")+'</div>';
})();

/* ---------- 知識庫 ---------- */
var K = window.SITE_KNOWLEDGE || {basics:[],platforms:[],compare:{rows:[]}};
function tutorPrompt(topic){
  return "我正在學習 AI 知識，請你當我的 AI 導師，用繁體中文解釋「"+topic+"」：\n1. 用生活化的比喻說明它是什麼\n2. 它為什麼重要、實際應用場景\n3. 我這種非工程師要怎麼上手使用\n4. 給我一個 10 分鐘內能完成的小練習";
}
window.copyTutor = function(topic){
  var text = tutorPrompt(topic);
  if(navigator.clipboard){ navigator.clipboard.writeText(text).then(function(){ toast("🤖 已複製提問內容，貼到 Claude 即可"); }); }
  else{ toast("複製失敗，請手動複製"); }
};
(function(){
  document.getElementById("basicsList").innerHTML = K.basics.map(function(b){
    var id = "k_" + b.en.replace(/[^a-z0-9]/gi,"");
    return '<details><summary>'+esc(b.term)+'<span class="en">'+esc(b.en)+'</span></summary>' +
      '<div class="d-body"><p>'+esc(b.body)+'</p>' +
      '<button class="tutor-btn" onclick="copyTutor(\''+esc(b.term)+'\')">🤖 呼叫 AI 導師深入學</button>' +
      '<div class="act-btns" style="display:inline-flex;margin-left:8px">'+readBtn(id,b.term)+'</div></div></details>';
  }).join("");
  document.getElementById("platformList").innerHTML = K.platforms.map(function(p){
    var id = "k_" + p.name.replace(/[^a-z0-9一-鿿]/gi,"");
    return '<details><summary>'+esc(p.name)+'<span class="en">更新 '+esc(p.updated)+'</span></summary>' +
      '<div class="d-body"><p>'+esc(p.body)+'</p><p style="margin-top:8px;color:var(--accent)">📖 學習路徑：'+esc(p.learn)+'</p>' +
      '<button class="tutor-btn" onclick="copyTutor(\''+esc(p.name)+' 的功能與使用方式\')">🤖 呼叫 AI 導師深入學</button>' +
      '<div class="act-btns" style="display:inline-flex;margin-left:8px">'+readBtn(id,p.name)+'</div></div></details>';
  }).join("");
  var c = K.compare;
  if(c && c.rows && c.rows.length){
    var html = "<table>";
    c.rows.forEach(function(r,i){
      html += "<tr>" + r.map(function(x){ return (i===0?"<th>":"<td>")+esc(x)+(i===0?"</th>":"</td>"); }).join("") + "</tr>";
    });
    html += "</table><p style='font-size:.8em;color:var(--muted)'>⚠️ "+esc(c.note)+"（更新於 "+esc(c.updated)+"）</p>";
    document.getElementById("compareBox").innerHTML = html;
  }
  refreshBtns();
})();

/* ---------- 生產力 ---------- */
var P = window.SITE_PRODUCTIVITY || {tools:[]};
(function(){
  document.getElementById("prodList").innerHTML = P.tools.map(function(t){
    var id = "p_" + t.name.replace(/[^a-z0-9一-鿿]/gi,"");
    var res = (t.resources||[]).map(function(r){ return '<a href="'+esc(r.url)+'" target="_blank" rel="noopener">'+esc(r.label)+'</a>'; }).join("");
    return '<details><summary>'+esc(t.name)+'<span class="en">'+esc(t.tagline)+'</span></summary>' +
      '<div class="d-body"><p>'+esc(t.body)+'</p>' +
      '<p style="margin-top:7px">🤖 <b>AI 整合：</b>'+esc(t.ai)+'</p>' +
      '<div class="res-links" style="margin-top:7px">'+res+'</div>' +
      '<button class="tutor-btn" onclick="copyTutor(\''+esc(t.name)+' 的使用方式與最佳實踐\')">🤖 呼叫 AI 導師深入學</button>' +
      '<div class="act-btns" style="display:inline-flex;margin-left:8px">'+readBtn(id,t.name)+'</div></div></details>';
  }).join("");
  refreshBtns();
})();

/* ---------- 大神文章 ---------- */
var A = window.SITE_ARTICLES || {leaders:{intl:[],zh:[],youtube:[]},articles:[]};
function leaderRow(l){
  return '<div class="leader-row"><div><a href="'+esc(l.url)+'" target="_blank" rel="noopener">'+esc(l.name)+'</a>' +
    (l.outlet?' <span class="en">'+esc(l.outlet)+'</span>':'') + '</div><div class="leader-focus">'+esc(l.focus)+'</div></div>';
}
(function(){
  document.getElementById("leadersIntl").innerHTML = (A.leaders.intl||[]).map(leaderRow).join("");
  document.getElementById("leadersZh").innerHTML = (A.leaders.zh||[]).map(leaderRow).join("");
  document.getElementById("leadersYt").innerHTML = (A.leaders.youtube||[]).map(leaderRow).join("");
  var arts = A.articles||[];
  document.getElementById("articleList").innerHTML = arts.length
    ? arts.map(function(a){
        var id = "a_" + a.url.slice(-40).replace(/[^a-z0-9]/gi,"");
        return '<div class="news-item"><div class="news-title"><a href="'+esc(a.url)+'" target="_blank" rel="noopener">'+esc(a.title)+'</a></div>' +
          '<div class="news-meta"><span class="badge">'+esc(a.author)+'</span><span>'+esc(a.date)+'</span></div>' +
          '<div class="news-sum"><ul style="margin-left:1.2em">'+(a.points||[]).map(function(p){ return "<li>"+esc(p)+"</li>"; }).join("")+'</ul></div>' +
          '<div class="news-why">📖 '+esc(a.verdict)+'</div>' +
          '<div class="act-btns">'+favBtn(id,"文章",a.title,a.url)+readBtn(id,a.title)+'</div></div>';
      }).join("")
    : '<div class="empty">每週排程啟用後，將自動抓取追蹤名單的新文章並附 AI 摘要</div>';
  refreshBtns();
})();

/* ---------- 我的學習 ---------- */
function renderMy(){
  var fk = Object.keys(favs).sort(function(a,b){ return favs[b].ts - favs[a].ts; });
  document.getElementById("myFavs").innerHTML = fk.length
    ? fk.map(function(id){
        var f = favs[id];
        return '<div class="leader-row"><div><span class="badge">'+esc(f.type)+'</span>' +
          (f.url ? '<a href="'+esc(f.url)+'" target="_blank" rel="noopener">'+esc(f.title)+'</a>' : esc(f.title)) +
          '</div><div class="act-btns">'+favBtn(id,f.type,f.title,f.url)+'</div></div>';
      }).join("")
    : '<div class="empty">還沒有收藏。在新聞、工具、文章按「☆ 收藏」加入待學清單</div>';
  var rk = Object.keys(reads).sort(function(a,b){ return reads[b].ts - reads[a].ts; });
  document.getElementById("myReads").innerHTML = rk.length
    ? rk.slice(0,30).map(function(id){
        var r = reads[id];
        return '<div class="leader-row"><div>✅ '+esc(r.title)+'</div><div class="leader-focus">'+new Date(r.ts).toLocaleDateString("zh-TW")+'</div></div>';
      }).join("")
    : '<div class="empty">還沒有已讀紀錄</div>';
}
var noteEl = document.getElementById("myNote");
noteEl.value = LS.get("note", "");
noteEl.addEventListener("input", function(){ LS.set("note", noteEl.value); });

/* ---------- 統計 ---------- */
function renderCounts(){
  document.getElementById("cFav").textContent = Object.keys(favs).length;
  document.getElementById("cRead").textContent = Object.keys(reads).length;
  var tc = 0; T.categories.forEach(function(c){ tc += c.tools.length; });
  document.getElementById("cTool").textContent = tc;
  document.getElementById("cTerm").textContent = (K.basics||[]).length + (K.platforms||[]).length;
}
renderCounts();
})();

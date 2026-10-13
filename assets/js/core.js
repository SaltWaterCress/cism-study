// Shared helpers: storage, theme, nav, service worker.
(function () {
  // ── Storage (wrapped so private mode never breaks the page) ──
  const NS = "cism:";
  window.store = {
    get(k, d) { try { const v = localStorage.getItem(NS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(NS + k); } catch (e) {} }
  };

  // ── Theme ──
  const saved = store.get("theme", null);
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
  };

  // ── Domain helpers ──
  window.dname = n => (window.CISM_DOMAINS || []).find(d => d.n === n);
  window.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  window.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ── Nav ──
  const PAGES = [
    ["index.html", "Home"], ["study.html", "Study guide"], ["cheatsheet.html", "Cheat sheet"],
    ["flashcards.html", "Flashcards"], ["exam.html", "Practice exams"]
  ];
  const here = (location.pathname.split("/").pop() || "index.html");
  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML =
    '<div class="nav-in"><a class="brand" href="index.html"><span class="brand-mark">CISM</span>Study Hub</a>' +
    '<nav class="nav-links">' + PAGES.map(p => `<a href="${p[0]}"${p[0] === here ? ' class="active"' : ""}>${p[1]}</a>`).join("") + "</nav>" +
    '<button class="icon-btn" onclick="toggleTheme()" aria-label="Toggle dark mode" title="Toggle dark mode">' +
    '<svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button></div>';
  document.body.prepend(nav);

  const foot = document.createElement("footer");
  foot.innerHTML = "Independent self-study resource. Not affiliated with or endorsed by ISACA®. CISM® is a registered trademark of ISACA. " +
    "All questions are original practice material, not from the official exam. Progress is saved in this browser only.";
  document.body.append(foot);

  // ── Offline support ──
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();

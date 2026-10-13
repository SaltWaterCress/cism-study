// Offline cache. Bump VERSION whenever you change content so users get the update.
const VERSION = "cism-v1";
const FILES = [
  "./", "index.html", "study.html", "cheatsheet.html", "flashcards.html", "exam.html",
  "assets/css/style.css", "assets/js/core.js",
  "data/domains.js",
  "data/questions-d1.js", "data/questions-d2.js", "data/questions-d3.js", "data/questions-d4.js",
  "data/cards-d1.js", "data/cards-d2.js", "data/cards-d3.js", "data/cards-d4.js",
  "manifest.json", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Network first for our own files (so updates show immediately online), cache fallback offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && (new URL(e.request.url).origin === location.origin || e.request.url.includes("fonts.g"))) {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});

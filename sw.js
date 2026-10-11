/* Consumer Rising service worker — offline-first app shell.
   Static assets: cache-first. Pages: network-first with offline fallback.
   API and function calls always bypass the cache. */
var CR_SW_VERSION = "cr-sw-v1";
var CR_STATIC_CACHE = "cr-static-v1";
var CR_PAGES_CACHE = "cr-pages-v1";

var PRECACHE = [
  "/offline",
  "/css/style.css",
  "/js/site.js",
  "/js/config.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CR_STATIC_CACHE).then(function (c) { return c.addAll(PRECACHE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CR_STATIC_CACHE && k !== CR_PAGES_CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isStatic(url) {
  return /\.(css|js|png|jpg|jpeg|webp|svg|woff2?|json)(\?|#|$)/.test(url.pathname) ||
    url.pathname.indexOf("/icons/") === 0 ||
    url.pathname.indexOf("/images/") === 0;
}

self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;
  /* Never cache API / server-function traffic. */
  if (url.pathname.indexOf("/api/") === 0) return;

  if (isStatic(url)) {
    /* Static: cache-first, refresh in background. */
    e.respondWith(
      caches.match(e.request).then(function (hit) {
        var net = fetch(e.request).then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(CR_STATIC_CACHE).then(function (c) { c.put(e.request, copy); });
          }
          return res;
        }).catch(function () { return hit; });
        return hit || net;
      })
    );
    return;
  }

  /* Pages: network-first, fall back to cache, then the offline page. */
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CR_PAGES_CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        return hit || caches.match("/offline");
      });
    })
  );
});

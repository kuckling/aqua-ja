/* Aqua'ja — Service Worker (PWA)
   Guarda la app en el celular tras la primera visita con internet.
   - La página (index.html) siempre busca la versión nueva cuando hay internet;
     si no hay internet, usa la guardada.
   - Íconos y manifest se sirven desde lo guardado y se actualizan en segundo plano.
   Si cambias los íconos o el manifest, cambia CACHE_NAME a aquaja-v2, v3... */
const CACHE_NAME = 'aquaja-v1';
const APP_SHELL = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon-180.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // SAM y otros servicios no se guardan
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/');
  if (isPage) {
    // Página: primero internet; si no hay, la guardada
    event.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('index.html')))
    );
  } else {
    // Íconos y manifest: primero lo guardado, se actualiza en segundo plano
    event.respondWith(
      caches.match(req).then((cached) => {
        const net = fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        }).catch(() => cached);
        return cached || net;
      })
    );
  }
});

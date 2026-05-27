// Unicorn Run service worker — v0.5.10
// Network-first for app shell/version files, cached fallback when offline.

const CACHE_NAME = 'unicorn-run-v0.5.10';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './version.json',
  './app-icon-32.png',
  './app-icon-152.png',
  './app-icon-167.png',
  './app-icon-180.png',
  './app-icon-192.png',
  './app-icon-512.png',
  './fairy_fly_sheet.png',
  './pixel_hooves.mp3',
  './gameover_lullaby.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS.map((url) => new Request(url, { cache: 'reload' }))))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('unicorn-run-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isAppShell =
    req.mode === 'navigate' ||
    url.pathname.endsWith('/') ||
    url.pathname.endsWith('/index.html') ||
    url.pathname.endsWith('/manifest.json') ||
    url.pathname.endsWith('/version.json') ||
    url.pathname.endsWith('/sw.js');

  event.respondWith(isAppShell ? networkFirst(req) : staleWhileRevalidate(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(req, { cache: 'no-store' });
    if (fresh && fresh.ok) {
      cache.put(req, fresh.clone()).catch(() => undefined);
    }
    return fresh;
  } catch (err) {
    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) return cached;
    throw err;
  }
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req, { ignoreSearch: true });
  const network = fetch(req)
    .then((res) => {
      if (res && res.ok) {
        cache.put(req, res.clone()).catch(() => undefined);
      }
      return res;
    })
    .catch(() => null);

  return cached || (await network) || new Response('', { status: 404, statusText: 'Offline and not cached' });
}

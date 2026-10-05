const CACHE_NAME = 'les-morts-v2-ui-pass03-37';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-512x512.png',
  './assets/icons/icon-maskable-512x512.png',
  './assets/icons/app-icon-legacy.jpg',
  
  './assets/story/covers/page-accueil.png',
  './assets/story/backgrounds/fond-transparence-01.png',
  './assets/ui/backgrounds/fond-pages-secondaires.png',
  './assets/ui/panels/cadre-panneau-sombre.png',
  './assets/ui/separators/separateurs-rouge-metal.png',
  './assets/ui/investigation/elements-preuves-enquete.png',
  './assets/ui/audio/habillage-lecture-vocale.png',
  './assets/ui/chapters/habillage-chapitres.png',
  './assets/ui/settings/habillage-confort-parametres.png',
  './assets/ui/music/habillage-mes-musiques.png',
  './assets/ui-pass-02/topbar/accueil.png',
  './assets/ui-pass-02/topbar/chapitres.png',
  './assets/ui-pass-02/topbar/enquete.png',
  './assets/ui-pass-02/topbar/lecture.png',
  './assets/ui-pass-02/topbar/plein-ecran.png',
  './assets/ui-pass-02/topbar/reglages.png',
  './assets/ui-pass-02/navigation/precedent.png',
  './assets/ui-pass-02/navigation/suivant.png',
  './assets/ui-pass-02/navigation/precedent-desactive.png',
  './assets/ui-pass-02/navigation/suivant-desactive.png',
  './assets/ui-pass-02/chapter-picker/panel-chapitres.png',
  './assets/icons/Logochapitre.jpg',
  './assets/icons/Logolexique.jpg',
  './assets/icons/Logoenquete.jpg',
  './assets/icons/Logopodcast.jpg',
  './assets/icons/Logopleinecran.jpg',
  './assets/icons/Logoreglage.jpg',
  './assets/icons/plein-ecran-final.jpg',
  './assets/ui-pass-03/topbar/chapitres.png',
  './assets/ui-pass-03/topbar/lexique.png',
  './assets/ui-pass-03/topbar/enquete.png',
  './assets/ui-pass-03/topbar/podcast.png',
  './assets/ui-pass-03/topbar/plein-ecran.png',
  './assets/ui-pass-03/topbar/reglages.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of CORE) {
        try {
          const response = await fetch(url, { cache: 'reload' });
          if (response.ok) await cache.put(url, response);
        } catch (_) {}
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const req = event.request;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = req.mode === 'navigate';
  const isImage = /\.(png|jpg|jpeg|webp|svg)$/i.test(url.pathname);

  if (isNavigation) {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (isImage) {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(req, copy)));
          }
          return response;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  event.respondWith(
    fetch(req).catch(() => caches.match(req))
  );
});

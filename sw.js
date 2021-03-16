const cacheName = 'cache-v43';
let resourcesToPrecache = [
        '/',
        'index.html',
        'iRO.html',
        'css/style.min.css',
        'css/pretty-checkbox.min.css',
        'main.min.js',
        'prompt.min.js',
        'img/paypal.webp',
        'img/picpay.webp',
        'img/rops.webp',
        'apple-icon-152x152.png',
        'apple-icon-180x180.png',
        'android-icon-192x192.png',
        'android-icon-144x144.png',
        'favicon-96x96.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'img/cookie.gif',
        'img/cookie.png',
        'img/cookiedead.png',
        'img/brflag.png',
        'img/usaflag.png',
        'manifest.json',
        'https://magedbgt.github.io/fontawesome/css/all.css',
        'https://magedbgt.github.io/fontawesome/webfonts/fa-solid-900.ttf',
        'https://magedbgt.github.io/fontawesome/webfonts/fa-solid-900.woff2',
        'https://magedbgt.github.io/fontawesome/webfonts/fa-solid-900.woff'
      ];

      for (var i = 0; i <= 32 ; i++) {
        resourcesToPrecache.push('img/instancias/'+i+'.gif');
      }
      for (var i = 0; i <= 70 ; i++) {
        resourcesToPrecache.push('img/mvp/'+i+'.gif');
      }

self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (!cacheName.includes(key)) {
          return caches.delete(key);
        }
      })
    )).then(() => {
      console.log('new version is ready to handle fetches!');
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

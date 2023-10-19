const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, CacheOnly } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

const cacheOnly = new CacheOnly()

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

offlineFallback({
  urls: ['offline.html'],
  strategy: cacheOnly,
})

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

registerRoute(({ request }) => request.mode === 'navigate', cacheOnly); 

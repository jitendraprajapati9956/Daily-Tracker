<<<<<<< HEAD
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */

self.__WB_MANIFEST;

const CACHE_NAME = 'daily-tracker-cache-v1';
const urlsToCache = ['/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
=======
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */

self.__WB_MANIFEST;

const CACHE_NAME = 'daily-tracker-cache-v1';
const urlsToCache = ['/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
>>>>>>> 187a771c8e17bf05e25c8a29098bdab78c94e412
});
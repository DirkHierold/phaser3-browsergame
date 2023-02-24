// Even though our service worker is installed, it is not doing anything.
// To fix this, we will update our service worker to cache all of the assets that are used by our game.
var cacheName: string = "phaser-v1";
var filesToCache: Iterable<RequestInfo> = [
  "/",
  "/index.html",
  "/images/asteroid.png",
  "/images/dino.png",
  "/images/grass.png",
  "/images/icon-192-dino.png",
  "/images/icon-256-dino.png",
  "/images/icon-512-dino.png",
  "/src/consts/EventKeys.ts",
  "/src/consts/SceneKeys.ts",
  "/src/consts/StorageItemKeys.ts",
  "/src/consts/TextureKeys.ts",
  "/src/model/Player.ts",
  "/src/model/Enemies.ts",
  "/src/model/Target.ts",
  "/src/scenes/Game-scene.ts",
  "/src/scenes/MainMenu-scene.ts",
  "/src/scenes/Preloader-scene.ts",
  "/src/utils/Button.ts",
  "/src/utils/Datahandler.ts",
  "/src/utils/LocalStorage.ts",
  "/src/main.ts",
  "/game.css",
  "/manifest.json",
];
self.addEventListener("install", function (event: any) {
  console.log("sw install");
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        console.log("sw caching files");
        return cache.addAll(filesToCache);
      })
      .catch(function (err) {
        console.log(err);
      })
  );
});
// With our logic for caching in place, we need to add the logic that will allow us to use the cached assets.
// To use the cached assets, we need to add a new event listener for the fetch event,
// which is triggered any time a user visits a page after the service worker has been installed.
self.addEventListener("fetch", (event: any) => {
  console.log("sw fetch");
  console.log(event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response || fetch(event.request);
      })
      .catch(function (error) {
        console.log(error);
      })
  );
});

// If you ever want to force the service worker to use a new version of the cache,
// or if decide to use multiple caches,
// you will need a way to clean up the old caches on the users device.
// To do this, we can add an event listener for the activate event.
// This event is triggered any time a service worker takes control,
// and we will use this event to clean up our cache.
self.addEventListener("activate", function (event: any) {
  console.log("sw activate");
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            console.log("sw removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0492b5108ec5a466c1b09635dd83f2ea",
"assets/AssetManifest.bin.json": "49dc6c9e269a9d5b4d589c47e3a3dbb7",
"assets/AssetManifest.json": "3c0b803be13476085e32132069396565",
"assets/assets/images/github-mark-white.png": "1dee40f2668d5c719eafa2c89296f5e7",
"assets/assets/images/gmail.png": "0feb7e26e8d45472e5d86c5a6d4f2922",
"assets/assets/images/linkidIn.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/images/me.jpg": "fd444531dea0c58c5a8de14b76b769fd",
"assets/assets/images/project1/1.png": "daad12561288f7f152fe77daab448bc0",
"assets/assets/images/project1/2.png": "e7e1cd80ab679b8128b5ab8a17fc2775",
"assets/assets/images/project1/3.png": "9313d9699f65acf3b66e5bcfd57724d1",
"assets/assets/images/project1/4.png": "19dd4fc31d82e5263653cd4ec8432472",
"assets/assets/images/project1/5.png": "23b5c85e3cc4b2605da9b5c97766c137",
"assets/assets/images/project1/6.png": "5baaa3550fcb6d3e81b29b082dbf53ca",
"assets/assets/images/project1/7.png": "feea9970f5c9b68842b51374f65f2dc9",
"assets/assets/images/project1/8.png": "ad35c1ed232b79f45fa8785d5e5b1956",
"assets/assets/images/project2/1.png": "91d2aed01f180e137e2adeb052fc1fe2",
"assets/assets/images/project2/10.png": "f5ebf84db3c544b44b4be38cbf1f8a93",
"assets/assets/images/project2/11.png": "e7d582b1670131b724e7a200a15cb495",
"assets/assets/images/project2/12.png": "1b24184ab8ad6351c3f43f8158cdad5a",
"assets/assets/images/project2/13.png": "c13482845144e42cbb0d9a1b993f56b7",
"assets/assets/images/project2/14.png": "2a2732bb5ef168ac387cc75eadb1aa7e",
"assets/assets/images/project2/2.png": "a8b09584eeb3e0c4f1a846e8d78cc82e",
"assets/assets/images/project2/3.png": "9ade4e97b4ed14e37f584f103b5abedb",
"assets/assets/images/project2/4.png": "b28f14ec60aca34f057f2a33e1f0f4ff",
"assets/assets/images/project2/5.png": "d234eb05e56fed194158d00ec9828016",
"assets/assets/images/project2/6.png": "318a82af35e661ccab126f610728e28b",
"assets/assets/images/project2/7.png": "4a98d2886cf09061be771715e19ab1fa",
"assets/assets/images/project2/8.png": "87ad0523960fa9d8724c8af41e855bd8",
"assets/assets/images/project2/9.png": "9f1de21302200d484ad0fb96757a51b6",
"assets/assets/images/Vector.svg": "9c0c10d2278d2fb47b68ff76ecc63a6e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "f642d1566893b9ac09136c56f7c8bad8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e745ea3bf366e5f8717acae2a96c8fd0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e07af7619fb04f9c09bb98edb7ffd798",
"/": "e07af7619fb04f9c09bb98edb7ffd798",
"main.dart.js": "7432f5fbbbf114db32da4f4a604eb761",
"main.dart.mjs": "96b574a3061ace545dbafa41d4ec9ffc",
"main.dart.wasm": "bc8351f9a9142bb85a8a62e5d722cdef",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

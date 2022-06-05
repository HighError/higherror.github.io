'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5ee4d0add6458ec285f5b7ed711c1809",
".git/config": "50a90c7ffd56262e8a03fd7f32b174c6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b185bd4a5dfcf39799439a47324d240",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6b437767c2f96d5f8abae43f6379e82f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8886fb549dcdf2cbb2c94ef7349112c",
".git/logs/refs/heads/master": "d8886fb549dcdf2cbb2c94ef7349112c",
".git/logs/refs/remotes/origin/master": "88451982ceb2d8bc7e700e91ef99d9f2",
".git/objects/01/d81c402a22763f2babd1aa73bae38710a9b23a": "74bb40e4a5846d58dcc0eb48a01bf9c0",
".git/objects/01/e302a30f66e2ff1121dec471c9ae14062c1547": "f7cde7c534812ffdb9831b7260792c01",
".git/objects/0e/39eb83641277ccb60d0b94428156c5645d4131": "7778a0efe7ac6ad88d31ca5aa247547e",
".git/objects/17/49cc64540644c0e6be469025f2438946f7d5f4": "2193f19abbf95b59ab37f984e72a3f70",
".git/objects/24/4d4b7a4ca14fbd78fbf6bace5a8382ef923093": "94472976fa8c4901d615364c7a04ccd2",
".git/objects/27/c4e986af0fb3d39ae0ff552146e2b20f389b2a": "fd0b17d42fed65e60edd9980e521c8c8",
".git/objects/29/a809a1d9db7e23dfb29f6ae6e6f2518939812d": "28bb4d97ae5a94b10d30803964363c3f",
".git/objects/2d/7f7f2444f5b9f7e4b340624e139d6156486950": "2246427e78ec0d25cdb7a3d505bad512",
".git/objects/2e/a4946120b485d5a3ca5204f34907ad888f31f9": "ea5bab199704227628fac8df446a583b",
".git/objects/30/c3756d8bf6109a124dee9df7f3ddb0091e58d8": "9364042c3c7f7a9a8ec7b15812396a91",
".git/objects/34/1e0efb3c3386048b54b5f296f4f09eef2f2edb": "ead6bf2ece37bd552c602cfcfa1c23e3",
".git/objects/34/cd06b2caa644a92f6891cc699bcc11f125ba6e": "dae0b7d82d65a446999ebd2b99ae186d",
".git/objects/39/f7bfdbecb2970e9364d7f716a5194a26e2afe0": "ba8537ab90ed5b5df1aa275e48856c30",
".git/objects/3a/3e21db62fa0b986036a5d9ef103b66da8ed7ee": "59738f501beb86478868cd9450f38603",
".git/objects/45/2c639190b2fddafc03281658cf967da9c1a237": "fed3e1df63e128513ffeb17f31ee5986",
".git/objects/5c/1cd3d592cd016ba13965016646f4202e9421a6": "323f1cc6cefb51556654a4280b8f940b",
".git/objects/64/b67acdaf5dcd829ee79c778c01dc26864d1f19": "02bf85fb2eb30c495b99393cd3c36a29",
".git/objects/68/38c19859901c4b3e4ff4573b22c06bc76359d5": "ed869010b88afb3329bf383655a8c41e",
".git/objects/6b/3b40e7c2179894d41c6000f27c648ac00b9e33": "d743fb1368587b82b3a7acbeee3c2720",
".git/objects/6e/459229b0a3a28ed4dba491358cfc85ae079572": "ad7ea1346545da42f388d33cf1bc5131",
".git/objects/72/ed9bd1e46f17c2c2130552ef0b2a22d69d8025": "6932df75d936474a5b98b7eb9f647c0f",
".git/objects/75/cfb69b0816d58e57cba1e9f2425db9bc4199c9": "82f75f7922efcd692a22e1903e0ed33b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/2bec1741ddeb56c0f620b0203e4d20ff8bafb2": "8f4e92a2e34b4754f0aeaffda9da3856",
".git/objects/7a/ef3893b9570b09168c9892f07d57de1129c60b": "9fe05019a24ac8bc8cdf99b59561816b",
".git/objects/7d/3050fa4a7f878862f00cb1a11f8e956ed0821e": "c1e3073a2ca89f2764c95c924c1e0238",
".git/objects/83/69a48b8dc7620ab29f7268add03c25f381129e": "fcd864093be4261e420ddbcc449f28d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ef04bb91b9926786a236eb0df6d0634efe5bcc": "aab45fc6886f29c72856f0dd12d04b62",
".git/objects/90/4f011290d7fe851de29bd3963344e703747bc1": "20de293b21e653a1fb433d44ca774fe6",
".git/objects/91/aa73ec295ad84434b15deedaa11bdc1cbff5e1": "19e1e482356c3ee77b49cbd3d32cb3d6",
".git/objects/9b/31cc68216850f58d85ca2527600ba38233da64": "0fa5f08726de2fa923b4772e3ba4bb89",
".git/objects/9d/9bb50d10e691ea405c3ac18e0053887287485c": "82b335efc55753cf197615e7101b0045",
".git/objects/a0/4f5658fe1c2157b993475003afc7aeda3535f2": "2128ec0adb165ba4b4bd98f49d165fc8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/a79670f64f282f36bdbff212463533544664f6": "75d9c07c96210162928944e74bade25f",
".git/objects/ae/443c6041c6947bbe4543c4915e1ab05e0b36c6": "56bbd65027ed8b35f1e749b49b8b115d",
".git/objects/b2/b82fb20e524462382ded6139d94aff57fe4f83": "64e1987e1a7a5d6c579416ef0d92fd35",
".git/objects/b6/3c416afaecc47ff6e01a7b6cbac4e2e6f4c4e4": "93bdbdbaab7f81882cee236b7f126ce9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7d989ff253b868321a4bf9b956eb2d773e1a5c": "7ba1b083df19c9d32e2de95e2eafe586",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/de66a65cabb781fcc8d15b83770dfc6e1ab25a": "4c37a144817f261b7ba376c74ac20b28",
".git/objects/bf/c0af96add6528f1ae3719571feffd8702f9917": "40a607c18e84c40001fe5bcaa773697b",
".git/objects/c3/0464c04955824b0139625ab511071c1e6ef0fa": "3939cd520eb2962782f9a4e2b510e7f7",
".git/objects/c3/111c7ea31891c0f15856fcf89aee2b634b94a3": "5ee1adc46264cb5e31c1e44d9f192746",
".git/objects/c6/cd813f218befa578295926c0fd4fe8857684f6": "140c393345f409cb7e3cc64d56d0ea06",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/fd5794661c5ea06e9bd9c0ddd6ee02c2f0994d": "8d9e32775071e3b9cfcd2d24d5f1a6d6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/31196ec35607479918f79a32016b6736b80b78": "b3ba4c10790578a11c04aa6f6da80ac3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/1e0a832b762582562a31c22d04212f2d5bc4f3": "34377f35c110504939e60d47ccdeb7cb",
".git/objects/e3/c829d122401d6a48fda57f9aad8e2574761837": "3c34ef1ddb9097f60d75977c4f47a8e4",
".git/objects/e4/053ec4c353779c555eb356f798f306026b0af5": "d110241fcd64aa79df9b0dd396685779",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/31ca2f09e38aec16166b835e9a44a638ad4610": "d30976638d1c9c86a9c5ef15cabef39d",
".git/objects/fa/e0a38ca2f466f7332958c5fadcacea75820735": "47aa4bc0fbeb2f109bb8feb6c060f7da",
".git/objects/fc/5ad65bb5e406d150f7500b448c0fa2cc2bfd49": "41b7d9ae3b3949e2d5d64173fd348ca3",
".git/ORIG_HEAD": "af02e1bb15b72cbe29364e9f28e15fc4",
".git/refs/heads/master": "71d24dc4fdf0bc871cb863d17f00c98e",
".git/refs/remotes/origin/master": "71d24dc4fdf0bc871cb863d17f00c98e",
".git/sourcetreeconfig.json": "f5769696c365853e0d60c0615aa218b6",
"assets/AssetManifest.json": "59da5d7a8e304f9ce7d34a68a14a3e5a",
"assets/assets/fonts/fira_code/bold.ttf": "c31a92719e99b7d14974f314b50817d7",
"assets/assets/fonts/fira_code/medium.ttf": "bc5643ed366a1be6ccd5fbe947597c39",
"assets/assets/fonts/fira_code/regular.ttf": "438debc412b011bb81d086909e52a845",
"assets/assets/fonts/fira_code/semi_bold.ttf": "083f4695f20217c0b4276ce09707de21",
"assets/assets/images/404.png": "2390698a2a0eca4f239750219f17a4ca",
"assets/assets/images/background.png": "e3a3b73812d3f198298169d39ef79fa2",
"assets/assets/images/developer.png": "57d4feb9b5185cd4589ea1adcbf0e110",
"assets/FontManifest.json": "efa16e66525e2767bdab6147dee66003",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "271471bbd95862a75178faf735e75a28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "6019ce48b19acf660e72c2cb3d0697a4",
"CNAME": "093157b944fc7c611c2f0aa88c0cf6eb",
"favicon.ico": "0526f2f65d1af550de612adf7888cd47",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1306bb0477f400021b3881a7c04ef918",
"/": "1306bb0477f400021b3881a7c04ef918",
"main.dart.js": "82fe243ea239947137584cd2ecb605cb",
"manifest.json": "b39811dea3bcf53ff5c054bbb15e85ff",
"version.json": "88a46af52c190e9d381f8ecedc8cba88"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

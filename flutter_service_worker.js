'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "edc6c8b52dd5b14faa84768ee96dfbee",
"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "a0b8173ddc66a0ddb06719eaad9ee03d",
"/": "a0b8173ddc66a0ddb06719eaad9ee03d",
"main.dart.js": "4d5ba88b7f59432a5f4692eb42d093af",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "c2dc59b27ac12d5a76e2a411673454ff",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ralsei1.png": "369692835bdf96ac02c19e5903cc5c78",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
".git/config": "209559b0d280c6c31ae20b60e103e581",
".git/objects/0d/01e9d1e56cc996f2fe90b9c6ce67f2df9eef37": "6c5d3d2ba85b4c65dd7a7430e7b476a2",
".git/objects/59/df5feae1b6e34ddb366015708fed4bde9ce11c": "45dbc069fff80546b5e45d5bfa0ba6a0",
".git/objects/0c/ddf61796df388a5661487856adff8a02796263": "fbce311b208218b587d0e6fc2152e246",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/04/c514f08c882bc283346a1a660ec1cdfb9c8daa": "4d92aac6ae24bb59557f5d32d28d64d8",
".git/objects/3d/ffa5055348b07c821e991e547245d7d3f40f55": "da7a8dfd5df4a3797280f2b9b2139aed",
".git/objects/67/57501f64c0079d0a131917fe973c406970bef3": "b48bf49670407a10ab6b66ba0359cf61",
".git/objects/60/465469ebe8b01dffc38112259fe4d8a902b700": "6f201be02d9e9ad4b03dad4e48bd4579",
".git/objects/9c/65d5c71c50028868dec2fb1af711561c0dcd46": "a99442e10e8146c622354f404c94af1e",
".git/objects/b2/ab266ede3a1eca1579d6910c13837b89270cb5": "e0df48b193a75b76d9d3bba5e619e9f5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/dd385ffbc192b66314805f02a7141cc4389410": "c27d4e7f454f0fcd04d26e2ebd9779db",
".git/objects/bc/d799a43c47ca76e5757f2f52cf2f3cff9f651e": "0a5341214f5a640ae7ee4c4e1e2768b6",
".git/objects/e5/b78ed84d5507e25a47baa585713fa5073dc619": "83fb6bf6e85aa13b0d5111f8b1ac0e31",
".git/objects/f3/5e94be201d108d112f408e6d57354c67d204b0": "ad90b2e1bf86577729085090cf2b8f63",
".git/objects/eb/7e66b6a68be913ad5da4e910426309879b0b8d": "d80ab9013ca4fdf2277b77a990fb8925",
".git/objects/c0/e850ccb38cdd171acc44df97dc5b0d6cfbf7aa": "e3f7760f4c510dd46dd8ff0e2a995f41",
".git/objects/c9/893d6f43a464da5f26774ddab3a9f7073f8dde": "70affbbd790e896a5280472d3152acd2",
".git/objects/fd/3b79191f7a695a4c29c8a6a876f0ec509f4469": "1fc086e29b06f4731c211a2c7531632a",
".git/objects/e3/1daef055d4755e4d233e76812553494340dbe7": "39e11f44092a4b59a30624649679897f",
".git/objects/pack/pack-da75b0ae32d2f963fc339880f4ac4c155e439c4c.pack": "1d5ff2f55e34085ce006f2b8677d1dfb",
".git/objects/pack/pack-da75b0ae32d2f963fc339880f4ac4c155e439c4c.idx": "107a9821ae8313263dc45ab565941ab9",
".git/objects/pack/pack-da75b0ae32d2f963fc339880f4ac4c155e439c4c.rev": "b83539bdfd15a10ff14a6321302f433b",
".git/objects/73/0eeb82c96a1fc3e9e666ff8cf4f00323fe01c5": "962c233569af7187821bf8302f6f8dcf",
".git/objects/19/b1c5ebc02355a13dfd682342e3585cccf70f88": "c980b908dc09650795f210ce970bdfba",
".git/objects/26/81cd48fc114e4b8b94015af836d859f4c38727": "657953179d82b4f34b864b215bf8de08",
".git/objects/26/ff9cd2788491bbf3e1b1c6fb64792e22ffa3ea": "cd53dc8ef6da39c2166a7bc24a4181c7",
".git/objects/72/94aec7cd224847fba8403f0ce58635abfc95b1": "96c92f62b511f925658de2296d89b2a6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/6b/3685b958b8c5879895e02d5f6040dee0a6fdbf": "748ebefcf9a945d74d302bf777b44af8",
".git/objects/9a/286ca68d598859b3839d85c7593324006b7754": "f2a3470b7fa18fb68fddb0793eb37fcf",
".git/objects/9a/25b1bf96937fe6077221fe3d835e7b05161707": "564bf9ff47614d12741c0d54dcc952e4",
".git/objects/36/98c11a5b9ade382f0daa42568b8c2bfb6460ef": "4614c90e33e6a969d2b842be3aa7bedd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/39/1791bffe65751518eb17dcb39b869ada51ae2e": "0e5a63000f536d935c64446b07731948",
".git/objects/52/98792cd01c43c4bcd5fc59c3bd3f55900ff185": "27b198894edade8c4210e1397dfc7507",
".git/objects/90/80c12932abb62b84424e3ee831333b5cf89673": "59fc25aba0914d45b0bec5ab302e4056",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/ea7177a9bcf06f11a21a158c4420b9ae71c773": "a296c160dc39d4b82207cfaaa540a47a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/4298c4a9238d4d8f8479eeec5c861317babdc2": "5b72cc604e2beea3150f6edc69301181",
".git/objects/d5/efb068a62729d388ef189a2f0b99b758b8cd9c": "9ba234e73b31714a6987c81f025d5f16",
".git/objects/aa/7f6549ff7192230a3bae9be64397adae5ee7b8": "dd8b320646a6eadf10c2c85eb15552ab",
".git/objects/a8/aa3a821cc8a7a70f5e096e73da28c38d0d60aa": "976c1b28a743823e362dc913607681b6",
".git/objects/cd/f5f421625170b97b7e9e396dd0c2affb92aa51": "1c4388c04503864225514f16519096fe",
".git/objects/c5/d317c7b53a7e139346b9f974d3ac3c00bcb593": "545bd64c6186d05c77c74b9e7dfccfff",
".git/objects/f1/13a343da60bec5852d4ffbd3c7232cec97a3cf": "2915e8d03c002a70dc5702c7eadce8c9",
".git/objects/f8/930adbefa4a1e2af64a4a1484a9f15b75928b9": "e68cd75bdb735dda049d17b82069617b",
".git/objects/2c/784558f46aabd7e2f56ddb4ea69cc55640c64c": "6a0ae78d7c332e175811d197a868bb8a",
".git/objects/2c/cadc9656612bee635a986dbd68ac48466f431c": "dd0271b3b83de135b3810c0f999803fc",
".git/objects/83/9a00007d1c2f3eaffa639855c009b3d03521f4": "c777a175e9a09910cc03b561f04df10c",
".git/objects/15/8a03b777d3009859b7aae2f3e0c23d956c1ce1": "7afda042b9adc8e7e72ec19fb1be567d",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/7fc00a38b6ce4be7aa6d668334677450146c2c": "9f48bbdf39dbd5485e4aab45bb7de6d9",
".git/objects/78/bf9ad7aa22e0681434ed79018e2b48f48a411f": "7088eb20874b9ce9c6e0f7498176d498",
".git/objects/14/2db2f538472cb3a6505c0406a24246644beb76": "6ae6ef497894b18151b8c49bb4bbd102",
".git/objects/8e/5d70850b64466bf2ff54bc7a82d2770cf759fe": "5821bb058a9535c3506182d686440aba",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7df02af092ebcb0c66ce1e98d9e59965",
".git/logs/refs/heads/main": "7df02af092ebcb0c66ce1e98d9e59965",
".git/logs/refs/remotes/origin/HEAD": "0109fd4853b3669a1a7ae4e3d445adda",
".git/logs/refs/remotes/origin/main": "44303b84b85770636a62a8d6a2d27e05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "df6d8d3d1c2c8621fd765e5a61fe7331",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "df6d8d3d1c2c8621fd765e5a61fe7331",
".git/index": "4c4d2f2929fc5d82b6aeaa71d7c4deb6",
".git/packed-refs": "ee25e1a05916fa5b6a6ad1512a6a709c",
".git/COMMIT_EDITMSG": "35a7546cd12b45ef7da8f359a37db748",
".git/FETCH_HEAD": "2aeb20dd7da3a0876086df2972462ac3",
"assets/AssetManifest.json": "934472ed74b2ec4329bf8451821bc5e2",
"assets/NOTICES": "9e905a48c8d8c94ae0e38842644beece",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "6ad1cecdcce768e3efc0634bdd69a935",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4649a9293eabde1ad38d3a294510f1e9",
"assets/fonts/MaterialIcons-Regular.otf": "4e28876fb9d701935d1b873881735dd1",
"assets/assets/images/3_n.png": "369692835bdf96ac02c19e5903cc5c78",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "71c50407f7716c237ecf4f94841d370b",
"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "b78ed7732ce0fdb07ba548fb50e60a5e",
"/": "b78ed7732ce0fdb07ba548fb50e60a5e",
"main.dart.js": "2e294b8041a81289c32346da22cec341",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
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
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/0c/ddf61796df388a5661487856adff8a02796263": "fbce311b208218b587d0e6fc2152e246",
".git/objects/66/8227bf598eda6380545ff31396e2aa830b2b93": "84bb90957baac4ee8490560eb4c655d0",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/aa4546a2a600e1fb4dbf6fc513873404e80f22": "c2769d57ab998e9aadb4733300ea0f99",
".git/objects/04/c514f08c882bc283346a1a660ec1cdfb9c8daa": "4d92aac6ae24bb59557f5d32d28d64d8",
".git/objects/56/b580b08276cb9df9c3e80ef15c09ffdd8bd13c": "245d17d3c03aef05161309e5a41e0682",
".git/objects/3d/ffa5055348b07c821e991e547245d7d3f40f55": "da7a8dfd5df4a3797280f2b9b2139aed",
".git/objects/67/57501f64c0079d0a131917fe973c406970bef3": "b48bf49670407a10ab6b66ba0359cf61",
".git/objects/60/465469ebe8b01dffc38112259fe4d8a902b700": "6f201be02d9e9ad4b03dad4e48bd4579",
".git/objects/9c/65d5c71c50028868dec2fb1af711561c0dcd46": "a99442e10e8146c622354f404c94af1e",
".git/objects/b5/a11f9d742c5c31b465199ce6132964c805b0ed": "0a724db13e746deb41eebc09fccd1bb2",
".git/objects/b2/ab266ede3a1eca1579d6910c13837b89270cb5": "e0df48b193a75b76d9d3bba5e619e9f5",
".git/objects/ac/6622034f1acbe58652763fd5f2c060b76cb3b9": "4562a54cbc057ef3303a5bca5f306cdc",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/dd385ffbc192b66314805f02a7141cc4389410": "c27d4e7f454f0fcd04d26e2ebd9779db",
".git/objects/bc/d799a43c47ca76e5757f2f52cf2f3cff9f651e": "0a5341214f5a640ae7ee4c4e1e2768b6",
".git/objects/e5/b78ed84d5507e25a47baa585713fa5073dc619": "83fb6bf6e85aa13b0d5111f8b1ac0e31",
".git/objects/f3/5e94be201d108d112f408e6d57354c67d204b0": "ad90b2e1bf86577729085090cf2b8f63",
".git/objects/eb/e0bd39e977a9940c2e06f8d0e9024f1021a3ad": "c8645bd74c14c8adbdb42b112c31f4ff",
".git/objects/eb/7e66b6a68be913ad5da4e910426309879b0b8d": "d80ab9013ca4fdf2277b77a990fb8925",
".git/objects/c0/633725608c34790bac31df8c7b678b2063e6cb": "18dee7ccc95377e862b5481fafd3744f",
".git/objects/c0/e850ccb38cdd171acc44df97dc5b0d6cfbf7aa": "e3f7760f4c510dd46dd8ff0e2a995f41",
".git/objects/c9/893d6f43a464da5f26774ddab3a9f7073f8dde": "70affbbd790e896a5280472d3152acd2",
".git/objects/fd/3b79191f7a695a4c29c8a6a876f0ec509f4469": "1fc086e29b06f4731c211a2c7531632a",
".git/objects/e3/1daef055d4755e4d233e76812553494340dbe7": "39e11f44092a4b59a30624649679897f",
".git/objects/c1/7fa5a37796866ce783da644381de93494dd716": "00217275f5d98f387f0bf3c0c1556bf8",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/02e7b91bbc3aaedbe5a554893faddce52d3353": "97eef60bd18e8dcdd3d7f028c86ef619",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/pack/pack-da75b0ae32d2f963fc339880f4ac4c155e439c4c.pack": "1d5ff2f55e34085ce006f2b8677d1dfb",
".git/objects/pack/pack-da75b0ae32d2f963fc339880f4ac4c155e439c4c.idx": "107a9821ae8313263dc45ab565941ab9",
".git/objects/pack/pack-da75b0ae32d2f963fc339880f4ac4c155e439c4c.rev": "b83539bdfd15a10ff14a6321302f433b",
".git/objects/16/4116bfbde4f61df15700bd060bf263a6b10295": "fb75cc1d7eadab42eefa4719f1ad389b",
".git/objects/16/c7660ca3c9a4d25a2f3b16035eee5c2f03d8e2": "f2501f45a7b2c077e070b89c0c1d9b44",
".git/objects/73/0eeb82c96a1fc3e9e666ff8cf4f00323fe01c5": "962c233569af7187821bf8302f6f8dcf",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/19/b1c5ebc02355a13dfd682342e3585cccf70f88": "c980b908dc09650795f210ce970bdfba",
".git/objects/26/81cd48fc114e4b8b94015af836d859f4c38727": "657953179d82b4f34b864b215bf8de08",
".git/objects/26/ff9cd2788491bbf3e1b1c6fb64792e22ffa3ea": "cd53dc8ef6da39c2166a7bc24a4181c7",
".git/objects/21/7f70a4514473fd5a6fa35fcaebfdefb454f620": "969f71300e2f86c8ea56fc58004bcd44",
".git/objects/72/94aec7cd224847fba8403f0ce58635abfc95b1": "96c92f62b511f925658de2296d89b2a6",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/9f/96c01b682c2075fd5713c46a487a3e012b4ba5": "2da2144b1069520df76d2595c5173359",
".git/objects/6b/3685b958b8c5879895e02d5f6040dee0a6fdbf": "748ebefcf9a945d74d302bf777b44af8",
".git/objects/9a/286ca68d598859b3839d85c7593324006b7754": "f2a3470b7fa18fb68fddb0793eb37fcf",
".git/objects/9a/25b1bf96937fe6077221fe3d835e7b05161707": "564bf9ff47614d12741c0d54dcc952e4",
".git/objects/36/98c11a5b9ade382f0daa42568b8c2bfb6460ef": "4614c90e33e6a969d2b842be3aa7bedd",
".git/objects/91/3b869c0d86b9c170ba7e1d975c21d116408ba5": "982de74ea28939aa1b66d360b8e4e109",
".git/objects/65/a5bbe8d08705aa2a3a19c88c8878b5439b1543": "6c2314819aee7f83ddc39424a80be4d7",
".git/objects/37/9accef601d4c2aa8f1921f2f6d5995bbba81ea": "7e30ff739801cd5d7f37d1a5c5f40572",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/1791bffe65751518eb17dcb39b869ada51ae2e": "0e5a63000f536d935c64446b07731948",
".git/objects/52/98792cd01c43c4bcd5fc59c3bd3f55900ff185": "27b198894edade8c4210e1397dfc7507",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/80c12932abb62b84424e3ee831333b5cf89673": "59fc25aba0914d45b0bec5ab302e4056",
".git/objects/bf/90ddfba9d43655c77f8d79fc354cd3201f625d": "2dab7d36174fd88f0ab0893e80835eaf",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/ea7177a9bcf06f11a21a158c4420b9ae71c773": "a296c160dc39d4b82207cfaaa540a47a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/4298c4a9238d4d8f8479eeec5c861317babdc2": "5b72cc604e2beea3150f6edc69301181",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d5/efb068a62729d388ef189a2f0b99b758b8cd9c": "9ba234e73b31714a6987c81f025d5f16",
".git/objects/d2/9d2443d02be4cb0d8036d43af6a66bb559c7d6": "9febc77646cd975b69089b311ea83f42",
".git/objects/aa/7f6549ff7192230a3bae9be64397adae5ee7b8": "dd8b320646a6eadf10c2c85eb15552ab",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/7e6569791e822a8291f3c2a182ca827b608e04": "15f116168530348d580d620037746e08",
".git/objects/b7/80d04cf9b1ccd53f3ea8a4effa669376426018": "9d45eeb30242144078feed9f0b6ce3ea",
".git/objects/b7/e33ab9352dee142080e7e0e2fd35bed6d30bca": "4199766b450c2eb6f9a2aa1597f7b38a",
".git/objects/a8/aa3a821cc8a7a70f5e096e73da28c38d0d60aa": "976c1b28a743823e362dc913607681b6",
".git/objects/ef/351b1b39c71435f19164450ed52cf2d5780769": "709114c05e8b1ce118748ed8516a0757",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e1/e722bf0684671a30696a5dc20a73149d98613c": "7e5d3d3342d4f7ae4987a1b5cf38eb13",
".git/objects/cd/f5f421625170b97b7e9e396dd0c2affb92aa51": "1c4388c04503864225514f16519096fe",
".git/objects/cc/fb4733bae31ee86a239a9fad0d33c59654d978": "b904f8e69df42f73854d81ae5a628b97",
".git/objects/c5/d317c7b53a7e139346b9f974d3ac3c00bcb593": "545bd64c6186d05c77c74b9e7dfccfff",
".git/objects/f1/329e45e289ed56081c1af0347d243ae083e037": "0661120c2d88c2d404c1d2ad052451d2",
".git/objects/f1/13a343da60bec5852d4ffbd3c7232cec97a3cf": "2915e8d03c002a70dc5702c7eadce8c9",
".git/objects/f8/930adbefa4a1e2af64a4a1484a9f15b75928b9": "e68cd75bdb735dda049d17b82069617b",
".git/objects/2c/784558f46aabd7e2f56ddb4ea69cc55640c64c": "6a0ae78d7c332e175811d197a868bb8a",
".git/objects/2c/cadc9656612bee635a986dbd68ac48466f431c": "dd0271b3b83de135b3810c0f999803fc",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/9a00007d1c2f3eaffa639855c009b3d03521f4": "c777a175e9a09910cc03b561f04df10c",
".git/objects/1e/b041dd0c8bfd79c0f2a38bf9c7a13f4a519cbc": "ef4c86c3e1131320f66d84874d2ec909",
".git/objects/24/7d42b537229cd1818417c26f18d1fffca01c89": "af7af2c09ff10915ae2c3771315bbe4f",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/8a03b777d3009859b7aae2f3e0c23d956c1ce1": "7afda042b9adc8e7e72ec19fb1be567d",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/7fc00a38b6ce4be7aa6d668334677450146c2c": "9f48bbdf39dbd5485e4aab45bb7de6d9",
".git/objects/78/bf9ad7aa22e0681434ed79018e2b48f48a411f": "7088eb20874b9ce9c6e0f7498176d498",
".git/objects/13/67bee21eee3f8896821f31a80f9958215fdf5f": "246ca9d28eda29b28d47c28910f30dd8",
".git/objects/14/2db2f538472cb3a6505c0406a24246644beb76": "6ae6ef497894b18151b8c49bb4bbd102",
".git/objects/14/6c295a091aba5ebbc14b09ae59ca9ba6204ede": "42a36a4edba4ae8a3a70042a5db76012",
".git/objects/8e/5d70850b64466bf2ff54bc7a82d2770cf759fe": "5821bb058a9535c3506182d686440aba",
".git/objects/22/a36b7d554c09d46dc68cac952f832e789df888": "80979a6c8777a2bdb522d21861cee569",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d15ed817e35e7226ee4aebafe3557cc7",
".git/logs/refs/heads/main": "d15ed817e35e7226ee4aebafe3557cc7",
".git/logs/refs/remotes/origin/HEAD": "3c17caeab8a5030755aecaa8e9759b59",
".git/logs/refs/remotes/origin/main": "87c2ac3a20c3bd93d0538cc29b03dd20",
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
".git/refs/heads/main": "6ee3f791f50f37f4becdf72113883c15",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6ee3f791f50f37f4becdf72113883c15",
".git/index": "8f875fa830d067256d57fb244ecee2fe",
".git/packed-refs": "ee25e1a05916fa5b6a6ad1512a6a709c",
".git/COMMIT_EDITMSG": "b6cfb4997599b1dcca8dd2bb8a38e898",
".git/FETCH_HEAD": "5916e95f7d9593d913769c8f9f1b1e88",
"assets/AssetManifest.json": "934472ed74b2ec4329bf8451821bc5e2",
"assets/NOTICES": "10e8e4559c81fb4bc29e3eea8e2a0e06",
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
"assets/fonts/MaterialIcons-Regular.otf": "a4575b5866ef034df5f641452e51b16e",
"assets/assets/images/3_n.png": "369692835bdf96ac02c19e5903cc5c78",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
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

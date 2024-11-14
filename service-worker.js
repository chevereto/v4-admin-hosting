/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "05fcd56c1b83f4c4c3be5d24563ec0b7"
  },
  {
    "url": "account/index.html",
    "revision": "7e66c1d714112825d4b5d66615b81b1f"
  },
  {
    "url": "assets/css/0.styles.663a5ccd.css",
    "revision": "04f40aa37c50475bb6711c4a6ff3410d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f9f20194.js",
    "revision": "a730892a5ca1fe94f101b53349dc8294"
  },
  {
    "url": "assets/js/11.b1c351f7.js",
    "revision": "4fa6682a203b76d8a0bbf1ff7455cd42"
  },
  {
    "url": "assets/js/12.92dd740c.js",
    "revision": "9396d7cf68e61d3bb51ef4a28b5e71b5"
  },
  {
    "url": "assets/js/13.2af3544a.js",
    "revision": "60762487bee4e90c0db9a76cf1ecf783"
  },
  {
    "url": "assets/js/14.673055a6.js",
    "revision": "4f52bc9624f91f6afa22a886f9f73704"
  },
  {
    "url": "assets/js/15.65ae1de8.js",
    "revision": "1fd2426404b70656f95e80ee497a169e"
  },
  {
    "url": "assets/js/16.bacf7cb0.js",
    "revision": "29579f841e204ee39dc40c45d600c232"
  },
  {
    "url": "assets/js/17.6e2d1d69.js",
    "revision": "4ffe823d21e97aa5f05830c37924ed8f"
  },
  {
    "url": "assets/js/18.23f76e48.js",
    "revision": "7f484b4376be475e68b86c32ff04f5b4"
  },
  {
    "url": "assets/js/19.9e3361d9.js",
    "revision": "553dc803ea41742f53e08775416450ef"
  },
  {
    "url": "assets/js/2.13cc9ba0.js",
    "revision": "74410ac7ec4b3d3b44412ee3eb114305"
  },
  {
    "url": "assets/js/20.dfbb8e6d.js",
    "revision": "656c4f0fb9a55066a32335d73e4ec29e"
  },
  {
    "url": "assets/js/21.1e41c9d4.js",
    "revision": "eeff9002aff62d76898cc48ddcb4b981"
  },
  {
    "url": "assets/js/22.4df89395.js",
    "revision": "61f74531fae68ec957f7df224e6f7749"
  },
  {
    "url": "assets/js/23.6adb8723.js",
    "revision": "02a0ab50f30f59f11f3eaa1db9a2cb59"
  },
  {
    "url": "assets/js/24.e527c07d.js",
    "revision": "c18ea17b9756f1a2d3cf3f6304934e34"
  },
  {
    "url": "assets/js/25.72c1ca17.js",
    "revision": "47a73818e64e86a337090555f4c8c03c"
  },
  {
    "url": "assets/js/26.c5bbaa4b.js",
    "revision": "a9f628186a839863b5affaa79b155591"
  },
  {
    "url": "assets/js/27.b5153f92.js",
    "revision": "b5858e07a51acd16d591c43118bdc0f7"
  },
  {
    "url": "assets/js/28.9857e18c.js",
    "revision": "15c2ae154e7b8881a6fbd0c63f61856a"
  },
  {
    "url": "assets/js/29.c989f3a9.js",
    "revision": "9e5589a6367c05315ce2e9648f2390e8"
  },
  {
    "url": "assets/js/3.39bc1e19.js",
    "revision": "08722ae564e8f7a150ce4a3e11f82230"
  },
  {
    "url": "assets/js/30.5f500c02.js",
    "revision": "1ca84dcba6f47b62163822b1866874db"
  },
  {
    "url": "assets/js/31.25f2bd2a.js",
    "revision": "631baf4f075f80d6818d55af8b55661d"
  },
  {
    "url": "assets/js/32.581098d2.js",
    "revision": "5ef4e18b18a705a61436d2cf13a2783e"
  },
  {
    "url": "assets/js/33.cfced455.js",
    "revision": "311fb4e49e95fa8e2f74852063e0b6b5"
  },
  {
    "url": "assets/js/34.cf1dddb7.js",
    "revision": "80b9accce59272e7aad54a4a64811b53"
  },
  {
    "url": "assets/js/35.665b9f00.js",
    "revision": "42be8055ea4bd8abed18040e657017cf"
  },
  {
    "url": "assets/js/36.9ddb1124.js",
    "revision": "b7706f902f84e39dbb82d214079f5589"
  },
  {
    "url": "assets/js/37.2d803dcc.js",
    "revision": "2f39e416c8f127f6ce181739feeddafe"
  },
  {
    "url": "assets/js/38.2f5f4ea4.js",
    "revision": "8dc3f2ffc76763ca0abd2ee5fbc065f3"
  },
  {
    "url": "assets/js/39.febfb578.js",
    "revision": "ea8943cfa451da0756e35b8569722428"
  },
  {
    "url": "assets/js/4.775ed76b.js",
    "revision": "9286af65b9caee894865ce731ed45a72"
  },
  {
    "url": "assets/js/40.01de211c.js",
    "revision": "37bc83745c858a7933837be3e4b78d37"
  },
  {
    "url": "assets/js/41.a6887950.js",
    "revision": "f7ad5a6170d3ab58e66ff9890f0021cc"
  },
  {
    "url": "assets/js/42.a1e8e38b.js",
    "revision": "903375e26d3b783c5754da696098dc72"
  },
  {
    "url": "assets/js/43.00fc2bd5.js",
    "revision": "8e4e8ada5e05fbc0d7b90329b0f230a7"
  },
  {
    "url": "assets/js/44.d3bf5b74.js",
    "revision": "629635672c95ab994120f1fae5eb6231"
  },
  {
    "url": "assets/js/45.297c9818.js",
    "revision": "8462fd258498d4f393234992a42461ba"
  },
  {
    "url": "assets/js/46.ff7012e7.js",
    "revision": "6988708d84ebb282b237161f2c4fcc42"
  },
  {
    "url": "assets/js/5.26762c05.js",
    "revision": "ab26f6a74d655d56075c9e71539f9a90"
  },
  {
    "url": "assets/js/6.9f68f23a.js",
    "revision": "41b641b24ff5ed9fc4826d8435e4a5e7"
  },
  {
    "url": "assets/js/7.4fd6044c.js",
    "revision": "642b0b672b8404ab8d08ade76115d703"
  },
  {
    "url": "assets/js/8.7ac7996b.js",
    "revision": "aef8aa0798ae0462c192e2b244fe1bc5"
  },
  {
    "url": "assets/js/9.dba58834.js",
    "revision": "40e15dc945825146fb68476e808e9a2a"
  },
  {
    "url": "assets/js/app.d8688485.js",
    "revision": "89da7bdffd20bd73bed694dc1a257388"
  },
  {
    "url": "dashboard/albums.html",
    "revision": "a8bc6dbc65200ec8a9f0d92fdc7018b7"
  },
  {
    "url": "dashboard/bulk-importer.html",
    "revision": "11e1c687fdb5e391d57ddaa189efa172"
  },
  {
    "url": "dashboard/images.html",
    "revision": "cfef522149c36f8c2357e5f55290c276"
  },
  {
    "url": "dashboard/settings.html",
    "revision": "1847edaa861986cbaa8ca917ce6ecc54"
  },
  {
    "url": "dashboard/stats.html",
    "revision": "b92cfc90e20e11a57ce6a7d6395e92a1"
  },
  {
    "url": "dashboard/users.html",
    "revision": "5948dc8bd548a3337ccc0ed7efb3b7ad"
  },
  {
    "url": "features/external-storage.html",
    "revision": "629ccd37e84f0320052a4836fc3086be"
  },
  {
    "url": "features/login-providers.html",
    "revision": "c6324bc48c75b70f7153bd4bee56af8e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "94f8bc4278d8e6682905bcfdfe8b169f"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "settings/asset-storage.html",
    "revision": "d706d3c0b62eeeaae19782be18ceb51f"
  },
  {
    "url": "settings/banners.html",
    "revision": "b68efd89981be6f16455ad1755144cae"
  },
  {
    "url": "settings/categories.html",
    "revision": "34ab3175a54f3b4f0016b00fd4c26eb6"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "03d8209f08e72a603a5315809e37be6d"
  },
  {
    "url": "settings/content.html",
    "revision": "98196cabf95e5a9e0128e1be9b4adf69"
  },
  {
    "url": "settings/cookie-compliance.html",
    "revision": "469b9d0aabbc0415c7e62f3728e2199b"
  },
  {
    "url": "settings/email.html",
    "revision": "bf31fcbb0d59734c0602509d3043045f"
  },
  {
    "url": "settings/external-services.html",
    "revision": "94e90a180a42b69027379d9deca534ad"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "4b556867daf004c6d1199775b98f4f48"
  },
  {
    "url": "settings/file-uploads.html",
    "revision": "1cd093ef35d374f662dd69567128f3a2"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "1b161098c57efe51458d484d9b270191"
  },
  {
    "url": "settings/guest-api.html",
    "revision": "2bbc41afb517d925e47a3297ffae0b31"
  },
  {
    "url": "settings/homepage.html",
    "revision": "36d9da65bceee60a062a28f5db938fc0"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "f7d375571a76ef56a73ccce419cb4ea1"
  },
  {
    "url": "settings/languages.html",
    "revision": "f58d21ee02f2025d0950f05c7d9dc8bb"
  },
  {
    "url": "settings/listings.html",
    "revision": "bf7a8a2cb0bf7ecf7242c6dd37a68fd6"
  },
  {
    "url": "settings/login-providers.html",
    "revision": "581f3797897efce5263241d8ba6637d5"
  },
  {
    "url": "settings/logo.html",
    "revision": "2d9d56be80fcc9e1969412b41e79a6c5"
  },
  {
    "url": "settings/pages.html",
    "revision": "aab295ff8e47428f899b3e26e2d4d947"
  },
  {
    "url": "settings/routing.html",
    "revision": "0a45ddb512f54efdf1847608adf3f330"
  },
  {
    "url": "settings/semantics.html",
    "revision": "733da772047a7db41298708c45666fc1"
  },
  {
    "url": "settings/system.html",
    "revision": "c61b8532fab0b01a21fab63dcc73de53"
  },
  {
    "url": "settings/theme.html",
    "revision": "415cc8329d02017837a1c1a0ee107acc"
  },
  {
    "url": "settings/tools.html",
    "revision": "9c8198431feb34f7b71b53b33cfb9176"
  },
  {
    "url": "settings/upload-plugin.html",
    "revision": "ab49c6233775b94c8821b42c066e07f1"
  },
  {
    "url": "settings/users.html",
    "revision": "5668cdff06889959db4f8066af75bfbe"
  },
  {
    "url": "settings/watermarks.html",
    "revision": "046f1f724155248fdc1c0f52dab9af5a"
  },
  {
    "url": "settings/website.html",
    "revision": "71d0a5fd462ba50679e6046911a2a991"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

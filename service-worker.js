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
    "revision": "9164f685655e1340219bb20f18e27fca"
  },
  {
    "url": "account/index.html",
    "revision": "8f4443aa89fbec18a19dd259d0360e67"
  },
  {
    "url": "assets/css/0.styles.66adcf42.css",
    "revision": "65913f1b29dba87ed27977f24ffbcab5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c9232715.js",
    "revision": "a74b3d014395bc1bf051131240c26b4b"
  },
  {
    "url": "assets/js/11.f4372761.js",
    "revision": "0e85c1fcafc5c1fba3c4c86405bba299"
  },
  {
    "url": "assets/js/12.3c0a0c5c.js",
    "revision": "339b85155c3cc3ba6268fe54a477212f"
  },
  {
    "url": "assets/js/13.c979c727.js",
    "revision": "dc3169b112b3daf2e4ede81e9af2608f"
  },
  {
    "url": "assets/js/14.266a2633.js",
    "revision": "0640532e3279e55ec557ff2c7a632923"
  },
  {
    "url": "assets/js/15.4662e339.js",
    "revision": "d9a24f2eb64482e65b4770573304f119"
  },
  {
    "url": "assets/js/16.755ca9f8.js",
    "revision": "f22e5055af4478c9a60f232becba8c0e"
  },
  {
    "url": "assets/js/17.8247aad2.js",
    "revision": "158f81adfdc52ded1a4c411b66b2002c"
  },
  {
    "url": "assets/js/18.befd1397.js",
    "revision": "b055928c82d58ba2d8a23fcad4ec9c19"
  },
  {
    "url": "assets/js/19.c6facc3a.js",
    "revision": "1cd7035441c460436c09c77df799e420"
  },
  {
    "url": "assets/js/2.97f48f6b.js",
    "revision": "6f85d39905c236ee842d27c0eadbd0a9"
  },
  {
    "url": "assets/js/20.55f29c9e.js",
    "revision": "76ff97d92590ddcccf60da678ebbceac"
  },
  {
    "url": "assets/js/21.0110adc9.js",
    "revision": "a0339743f94e62f96506c6bd3996b6d4"
  },
  {
    "url": "assets/js/22.92476723.js",
    "revision": "43531fb14d685756d6bf9d5bed064606"
  },
  {
    "url": "assets/js/23.e9f5b271.js",
    "revision": "029f0b61495bbd3af5a29e5662208697"
  },
  {
    "url": "assets/js/24.6296e38d.js",
    "revision": "2de47c4640abfeb718ea793a0e663134"
  },
  {
    "url": "assets/js/25.c8deaff0.js",
    "revision": "be3adff1993423e3f4b07db8a5d4962b"
  },
  {
    "url": "assets/js/26.220e4190.js",
    "revision": "afe9d273c24e8f1207dff6241dc66212"
  },
  {
    "url": "assets/js/27.4c2e4e44.js",
    "revision": "f0b2ebf546ecf853ce3299d95ff849a4"
  },
  {
    "url": "assets/js/28.00639dcd.js",
    "revision": "30152f3744e59015e83438d5192a4194"
  },
  {
    "url": "assets/js/29.1bbfca46.js",
    "revision": "c71714352ef8b0524a517157423b5cb9"
  },
  {
    "url": "assets/js/3.7e8fb98a.js",
    "revision": "db289a965e4d81a19a5a887ecced30c2"
  },
  {
    "url": "assets/js/30.53aa4cd4.js",
    "revision": "caacf1b928315253c4fd666f2aaaffd2"
  },
  {
    "url": "assets/js/31.f94ff4fc.js",
    "revision": "1d0c1414feaaad8ee331b0a7fc7c6d2f"
  },
  {
    "url": "assets/js/32.1d6a5d3d.js",
    "revision": "f7618fa3927e3a5f4ace46c05e345d65"
  },
  {
    "url": "assets/js/33.3e23445e.js",
    "revision": "6cf9190f3ddc71aaaf095cd4b862dd3c"
  },
  {
    "url": "assets/js/34.96784eea.js",
    "revision": "e4d999a52b0ad8bb8d2b3dfb2da7c16f"
  },
  {
    "url": "assets/js/35.260f894c.js",
    "revision": "289565b8e6efda7a3ff9a6bc1f399f6c"
  },
  {
    "url": "assets/js/36.ee4ace3d.js",
    "revision": "426f211e60ee66e2eeb9f59b74ee4b43"
  },
  {
    "url": "assets/js/37.1c3069d2.js",
    "revision": "3c5f57c3545d98bf655d34163063c35e"
  },
  {
    "url": "assets/js/38.fa589a99.js",
    "revision": "885b09652fb39371c26ffd175ddf4cf5"
  },
  {
    "url": "assets/js/39.99b75ad7.js",
    "revision": "6cef5a9c1e6eb542cc1a006e574746b1"
  },
  {
    "url": "assets/js/4.abd91876.js",
    "revision": "17993b55b71886c88e1231056871dad7"
  },
  {
    "url": "assets/js/40.f8fc1310.js",
    "revision": "462823ac2668cf3880655ee8ad558591"
  },
  {
    "url": "assets/js/5.b02463ce.js",
    "revision": "5033f2ebc99618989c1dec9ce120dc22"
  },
  {
    "url": "assets/js/6.0eca3ede.js",
    "revision": "bb038fc9f50b58f925786a281b2cd93f"
  },
  {
    "url": "assets/js/7.ba5c6bce.js",
    "revision": "29c1efcf57eb5c127c51ef4e1a0c5e18"
  },
  {
    "url": "assets/js/8.a9a2e14b.js",
    "revision": "0be4a2bd8acc051b72d9a2242cd1ede4"
  },
  {
    "url": "assets/js/9.bbcf9460.js",
    "revision": "b0d9ac4ff8df78baa310f40d3550793c"
  },
  {
    "url": "assets/js/app.af159d8e.js",
    "revision": "9415ef8a5357d17d7e13b08423e27391"
  },
  {
    "url": "dashboard/albums.html",
    "revision": "a8f05a9d2ec60441c09e6e20e05016e9"
  },
  {
    "url": "dashboard/bulk-importer.html",
    "revision": "9de47eee5773c4eb353da7c6f0f3607e"
  },
  {
    "url": "dashboard/images.html",
    "revision": "f69e23521ea758731520c3f9992ac127"
  },
  {
    "url": "dashboard/stats.html",
    "revision": "047e206083ae718514ec9d71aca631be"
  },
  {
    "url": "dashboard/users.html",
    "revision": "560ef228a73bdbeeef4ef2b7d3351d83"
  },
  {
    "url": "features/external-storage.html",
    "revision": "2d77e9f2a410722514550fbc33afec7c"
  },
  {
    "url": "features/social-login.html",
    "revision": "555c43301b341b6133094c4274b7961e"
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
    "revision": "6a0d6b0299db3aab3d9464bf70598db0"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "settings/additional-settings.html",
    "revision": "0d0665ba46db1903c933569557f564b9"
  },
  {
    "url": "settings/api.html",
    "revision": "4254c32e55db176887f6f64a66b58085"
  },
  {
    "url": "settings/banners.html",
    "revision": "9d81d8106f742d5d9d9bf9b3fc91ac09"
  },
  {
    "url": "settings/categories.html",
    "revision": "b9d50af4abee16eda29e17f24ec8ff57"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "8f23c96d70661f7c492ddaa7c6aa5c90"
  },
  {
    "url": "settings/content.html",
    "revision": "0da4d8234d3265c73379a5efa0c8b9f8"
  },
  {
    "url": "settings/email.html",
    "revision": "4fd8bf14a685a667baf1757b97a751f6"
  },
  {
    "url": "settings/external-services.html",
    "revision": "c5797ce0c75b698b8380cedadf52ccf8"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "4b3ef00d1221c22888255810594d85c7"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "4aec9c14c8b5b78cb880fda9102116b8"
  },
  {
    "url": "settings/homepage.html",
    "revision": "e71db5196fde6f85e8d5d7fd0791f2cc"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "1cf0ff286acabe29bbd48e6916d0f494"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "513e7de5c2040b260e052812303fbd75"
  },
  {
    "url": "settings/languages.html",
    "revision": "b41783cac9cb612ac39d92d9e6f0703c"
  },
  {
    "url": "settings/listings.html",
    "revision": "6ebcf9ce71ecfef244b273d06fa32074"
  },
  {
    "url": "settings/pages.html",
    "revision": "034960d97fdc9a021cbe48ffc0b4f0e6"
  },
  {
    "url": "settings/routing.html",
    "revision": "a07e69819afa8cbaaa9e680b6d4f6866"
  },
  {
    "url": "settings/social-networks.html",
    "revision": "34d15af53e9f78e1b4676f3f9ed8b201"
  },
  {
    "url": "settings/system.html",
    "revision": "7dbff2f4b3060f7e1aca5341e019ec64"
  },
  {
    "url": "settings/theme.html",
    "revision": "6bfbdd6ff8f493aa8892b3c7e792ab10"
  },
  {
    "url": "settings/tools.html",
    "revision": "2c96b2986a000b0c0a9a6bed0d1cd803"
  },
  {
    "url": "settings/users.html",
    "revision": "6c58cb133f3abd06264b3769609ff59b"
  },
  {
    "url": "settings/website.html",
    "revision": "8bc099794749578361be8b728807aaae"
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

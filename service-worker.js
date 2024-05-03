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
    "revision": "674550ba0e4f353477753f793cafadd6"
  },
  {
    "url": "account/index.html",
    "revision": "240568369d3fbcc877cbadf4871acd2a"
  },
  {
    "url": "assets/css/0.styles.5d953800.css",
    "revision": "60f7ec2ad015b994de3534a429cdb802"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1de139f3.js",
    "revision": "5ac7a83a717fc2f970ed8eb423546f6c"
  },
  {
    "url": "assets/js/11.948390b1.js",
    "revision": "038561e2ae983ae6bc97abd4e1987959"
  },
  {
    "url": "assets/js/12.759d4746.js",
    "revision": "97d070811884b781ab8d6436cdf29022"
  },
  {
    "url": "assets/js/13.8f59abc0.js",
    "revision": "c061a227fdd7a81806c4aafdef4bcf6d"
  },
  {
    "url": "assets/js/14.6f58dee4.js",
    "revision": "2ab04d011571ce487e668246b2ee2c5a"
  },
  {
    "url": "assets/js/15.65ae1de8.js",
    "revision": "1fd2426404b70656f95e80ee497a169e"
  },
  {
    "url": "assets/js/16.5bf4edf0.js",
    "revision": "51321b5639af0b534a97ce5a6c6c17c7"
  },
  {
    "url": "assets/js/17.91a36434.js",
    "revision": "55bd4d85fef9c83e5b2950a5bbe8e196"
  },
  {
    "url": "assets/js/18.c35e3b2a.js",
    "revision": "eb420457f4c9af12acde75c6325f43b0"
  },
  {
    "url": "assets/js/19.2fc5c7ab.js",
    "revision": "8632c19298527021bf7f1e74b03a8013"
  },
  {
    "url": "assets/js/2.13cc9ba0.js",
    "revision": "74410ac7ec4b3d3b44412ee3eb114305"
  },
  {
    "url": "assets/js/20.df7ee12d.js",
    "revision": "d627050471356c7739d11baf450a36b3"
  },
  {
    "url": "assets/js/21.4a5b901f.js",
    "revision": "beb4b74f8f303ea1cd9cb394db59e563"
  },
  {
    "url": "assets/js/22.33f0ae0f.js",
    "revision": "2c9107596055a00de72954ad3c5a0acb"
  },
  {
    "url": "assets/js/23.70ea9940.js",
    "revision": "263f284122aadd22d014b51e8adad986"
  },
  {
    "url": "assets/js/24.bb45d844.js",
    "revision": "5edb206b55bc22a3a80d6a8b10e9f4bc"
  },
  {
    "url": "assets/js/25.4abd9222.js",
    "revision": "0c5106f0e4a7d5fa8c2d701bec58cebb"
  },
  {
    "url": "assets/js/26.be083502.js",
    "revision": "ebaec660551a915e2c0b8a38901494e5"
  },
  {
    "url": "assets/js/27.55aa187a.js",
    "revision": "3975d38c456986cd15beeeaa2eb5dbde"
  },
  {
    "url": "assets/js/28.d66f4221.js",
    "revision": "93efdb98d6b7d4469951878651ad6cc8"
  },
  {
    "url": "assets/js/29.186fb06a.js",
    "revision": "9d37f01a06b7aaca5e7001bbdc88525c"
  },
  {
    "url": "assets/js/3.39bc1e19.js",
    "revision": "08722ae564e8f7a150ce4a3e11f82230"
  },
  {
    "url": "assets/js/30.0895d59a.js",
    "revision": "b1eddeef6015866fc2464b160a2f2ff5"
  },
  {
    "url": "assets/js/31.72978397.js",
    "revision": "c15d488a03c6b7fe60a8b78a7274a060"
  },
  {
    "url": "assets/js/32.12ee8764.js",
    "revision": "9bef49e62cffa674a14a138aa109eb73"
  },
  {
    "url": "assets/js/33.ff1120fb.js",
    "revision": "522eb803684a67d14eb8626d20db0938"
  },
  {
    "url": "assets/js/34.a41d1715.js",
    "revision": "27a28e2b358c6e204fbf5aec6abf7837"
  },
  {
    "url": "assets/js/35.a5c309fa.js",
    "revision": "828e1fc2b0b0ba98bdf8106f666541d8"
  },
  {
    "url": "assets/js/36.d9b871ca.js",
    "revision": "2d9e757c6a15df67fa64addd97c9f5e3"
  },
  {
    "url": "assets/js/37.b40e37f7.js",
    "revision": "2adc07b3350546108dda3803530b330c"
  },
  {
    "url": "assets/js/38.43f3eed9.js",
    "revision": "243622da1fc3b5fc94a29e0d975377bc"
  },
  {
    "url": "assets/js/39.97dcc1ef.js",
    "revision": "228d81557443c9ace7ab47217b1174b8"
  },
  {
    "url": "assets/js/4.d09b6ae3.js",
    "revision": "b6746c49b44d9cadc0b00546557060d5"
  },
  {
    "url": "assets/js/40.a218372b.js",
    "revision": "73269d00f1d2d99396b6b65603968885"
  },
  {
    "url": "assets/js/41.f92cc122.js",
    "revision": "cc1768406dc12ea7acf190aa08d6194b"
  },
  {
    "url": "assets/js/42.5b518ab9.js",
    "revision": "207145b5b4136792623abb080b3c69dc"
  },
  {
    "url": "assets/js/43.9a2149f2.js",
    "revision": "f5cbe1f6524521fae0bec282a5466317"
  },
  {
    "url": "assets/js/44.1e156006.js",
    "revision": "f158fcde6c7149217aa0bc63f126ad44"
  },
  {
    "url": "assets/js/45.d61c758c.js",
    "revision": "b5d5b03bdbeb46acce46df392262b7c9"
  },
  {
    "url": "assets/js/5.566671cb.js",
    "revision": "220dec090811341cb37c7ccf9d57b517"
  },
  {
    "url": "assets/js/6.756c7850.js",
    "revision": "71ac01b4f8db1a35d3f569e1c082244a"
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
    "url": "assets/js/app.a8608003.js",
    "revision": "5bb3afaae0638dc47033fef92b2f9e56"
  },
  {
    "url": "dashboard/albums.html",
    "revision": "1adfa9f72c56c73e9964c155a853f8a1"
  },
  {
    "url": "dashboard/bulk-importer.html",
    "revision": "93ae215643dd0bbd61e186271d0a2e79"
  },
  {
    "url": "dashboard/images.html",
    "revision": "33bf220d747a9aeb32a87e92fd32598a"
  },
  {
    "url": "dashboard/settings.html",
    "revision": "aed6585e04f4ea84688d889c005c1e81"
  },
  {
    "url": "dashboard/stats.html",
    "revision": "b86f7807d283d752550a6cf6dfa02470"
  },
  {
    "url": "dashboard/users.html",
    "revision": "2d3c846689ce6d22be60552b8b1625dc"
  },
  {
    "url": "features/external-storage.html",
    "revision": "f1529c4d77ee4c1af0497d329bbebb4c"
  },
  {
    "url": "features/login-providers.html",
    "revision": "ba66468f351dfd433b9bc6ccfb695b9b"
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
    "revision": "9070e12d3420fdbaebb8cb1045c32989"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "settings/banners.html",
    "revision": "df544792971360bece5edfac348ca6a1"
  },
  {
    "url": "settings/categories.html",
    "revision": "d187e15f01cd3197d65ed22cf083067a"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "3c83443a9414696f7068ffb9f8dd01fb"
  },
  {
    "url": "settings/content.html",
    "revision": "8b8a787c67588b4237d175a3b2e70df0"
  },
  {
    "url": "settings/cookie-compliance.html",
    "revision": "d1769f2e2edffc389d4bb50730de8156"
  },
  {
    "url": "settings/email.html",
    "revision": "183d4d97d46ee02b5378e23555bbe2ea"
  },
  {
    "url": "settings/external-services.html",
    "revision": "e60f6db3c572604ec4d380bb3d85c0f5"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "6a4804c9d68c95757fdff91946c3feae"
  },
  {
    "url": "settings/file-uploads.html",
    "revision": "292a022c847ec4766559b0cffa4baa7a"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "6dfa12b0f507595fe8f2500208831a50"
  },
  {
    "url": "settings/guest-api.html",
    "revision": "8782bbea8e0c8a5344a7458d9f767f74"
  },
  {
    "url": "settings/homepage.html",
    "revision": "ae288e61040b8491ff4769dc85cce9ed"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "cda425922324ac3f9586a7c498a3b5e5"
  },
  {
    "url": "settings/languages.html",
    "revision": "681894215ce0a543e7c16fa761c49a0d"
  },
  {
    "url": "settings/listings.html",
    "revision": "e06de368848e9c6faf8df9846061329f"
  },
  {
    "url": "settings/login-providers.html",
    "revision": "45b2b4c849cd70e935027e74e5cd82a8"
  },
  {
    "url": "settings/logo.html",
    "revision": "c92d7327208e12d7011b48e3bf3bec98"
  },
  {
    "url": "settings/pages.html",
    "revision": "8c243a0fc544bfbf499a9affd8cab4b8"
  },
  {
    "url": "settings/routing.html",
    "revision": "0ad1b187761eb83b917529eea35f8a20"
  },
  {
    "url": "settings/semantics.html",
    "revision": "f836ce5a209a0a2b100e17d244c54b17"
  },
  {
    "url": "settings/system.html",
    "revision": "4ee2041e7ba7e37e1b245d1909b1bd45"
  },
  {
    "url": "settings/theme.html",
    "revision": "fc92b62ef082b3461d0e772a878daf33"
  },
  {
    "url": "settings/tools.html",
    "revision": "ba853017d6f6bf807e281d529cb82c8f"
  },
  {
    "url": "settings/upload-plugin.html",
    "revision": "5fa2d5b36041371ed7d250d648187a33"
  },
  {
    "url": "settings/users.html",
    "revision": "c9577d094522ace0e5469492d0e189b6"
  },
  {
    "url": "settings/watermarks.html",
    "revision": "24dc3cea0c16bb47877e084de2232819"
  },
  {
    "url": "settings/website.html",
    "revision": "48bfd4414bd0448c1930fe3e1778a1d5"
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

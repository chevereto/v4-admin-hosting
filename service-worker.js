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
    "revision": "e715313ed6985f32efcfec66556d89a9"
  },
  {
    "url": "account/index.html",
    "revision": "70b7f97fcd24ae3271093b589e7040c6"
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
    "url": "assets/js/15.526bdbe2.js",
    "revision": "9487c8379adf14ad816fc2a04f9de462"
  },
  {
    "url": "assets/js/16.93bf12f7.js",
    "revision": "91fb29d4d9cba2d335a2084352e9b11f"
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
    "url": "assets/js/19.173e3f5d.js",
    "revision": "830de858ae974d3ebc3f9c7b271f617e"
  },
  {
    "url": "assets/js/2.13cc9ba0.js",
    "revision": "74410ac7ec4b3d3b44412ee3eb114305"
  },
  {
    "url": "assets/js/20.ca8be530.js",
    "revision": "686e8ecc3266eab2184f37f59fc3b4c7"
  },
  {
    "url": "assets/js/21.bc903239.js",
    "revision": "b2b197d5be45a35f81a61f77c6db3a4c"
  },
  {
    "url": "assets/js/22.7fc12e73.js",
    "revision": "80134a646618b8c351e56ee0816a63dd"
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
    "url": "assets/js/26.2eb9d78a.js",
    "revision": "fb78dca851208ab94132f06c8a0d9a8e"
  },
  {
    "url": "assets/js/27.046b9060.js",
    "revision": "485f12c40a8ecfc18da2e1b33382825c"
  },
  {
    "url": "assets/js/28.f2cbd1da.js",
    "revision": "31ad21c91d9a2b20ca6828b59e2da2e4"
  },
  {
    "url": "assets/js/29.c0346617.js",
    "revision": "a24c82f93c7acbadd4cbc71ad76a080c"
  },
  {
    "url": "assets/js/3.39bc1e19.js",
    "revision": "08722ae564e8f7a150ce4a3e11f82230"
  },
  {
    "url": "assets/js/30.ca4e4a46.js",
    "revision": "646eb806f5dde99470d095c31345978b"
  },
  {
    "url": "assets/js/31.3558cb05.js",
    "revision": "329f0614b82f0b76073e4cc631921f13"
  },
  {
    "url": "assets/js/32.c45f4154.js",
    "revision": "8d3c3f053a30413af7a10b3d00ed5c39"
  },
  {
    "url": "assets/js/33.258ca82c.js",
    "revision": "aeaf0cf78708298ac390b0509f9cb4f9"
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
    "url": "assets/js/37.d55abe77.js",
    "revision": "8415353603345a0466956b218cc677e5"
  },
  {
    "url": "assets/js/38.263ef520.js",
    "revision": "620b9d4716892183f1dc01823345b122"
  },
  {
    "url": "assets/js/39.88120d25.js",
    "revision": "cc6c6d556c5ca751eedaca45fb7f7d81"
  },
  {
    "url": "assets/js/4.d09b6ae3.js",
    "revision": "b6746c49b44d9cadc0b00546557060d5"
  },
  {
    "url": "assets/js/40.f2ddcf1e.js",
    "revision": "1c95499ff20f71955cc2e5f56d0c1116"
  },
  {
    "url": "assets/js/41.3562f8cf.js",
    "revision": "439e1b8933fe1b72cd49f62c8032327b"
  },
  {
    "url": "assets/js/42.5b518ab9.js",
    "revision": "207145b5b4136792623abb080b3c69dc"
  },
  {
    "url": "assets/js/43.39719f58.js",
    "revision": "3d9761f71e2d6b9ad7ca23f794ca34b4"
  },
  {
    "url": "assets/js/44.772f7d4f.js",
    "revision": "1caced71a481c8a77e762b70c2430580"
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
    "url": "assets/js/app.12e739e8.js",
    "revision": "4eabc5b08111d50bc97fa6242a1b4fa2"
  },
  {
    "url": "dashboard/albums.html",
    "revision": "5547c30df62f4fc0ccc5e3e372d459c1"
  },
  {
    "url": "dashboard/bulk-importer.html",
    "revision": "42d68af270ce09f3697710b2dbeb284d"
  },
  {
    "url": "dashboard/images.html",
    "revision": "405ebc8d486e4cfcaff0559b253b3c9f"
  },
  {
    "url": "dashboard/settings.html",
    "revision": "e515563d21fa4c72df5ba88672609980"
  },
  {
    "url": "dashboard/stats.html",
    "revision": "7aee2060aa3b2698ad08f38c72704c9e"
  },
  {
    "url": "dashboard/users.html",
    "revision": "4e04c1609f6e4d849746bed1193128ef"
  },
  {
    "url": "features/external-storage.html",
    "revision": "e9ce6bded93100a6cf58c0e79d7524c0"
  },
  {
    "url": "features/login-providers.html",
    "revision": "a84fab8fc4ca709f54b0f4dd35b5ba23"
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
    "revision": "96642ef7a73c2106ab5b43525db2257f"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "settings/banners.html",
    "revision": "b9b69e0c0cb87d470eadc9660d246893"
  },
  {
    "url": "settings/categories.html",
    "revision": "da02b6760c982a6ac7a31f00a67cb547"
  },
  {
    "url": "settings/consent-screen.html",
    "revision": "1dc7772249c4564f6c0c1038a4808cbe"
  },
  {
    "url": "settings/content.html",
    "revision": "ec5e99fa670ed6f42f1ca7a7abd309ff"
  },
  {
    "url": "settings/cookie-compliance.html",
    "revision": "0012e0f4426d4edefec66a1b6403805b"
  },
  {
    "url": "settings/email.html",
    "revision": "0d97eed4b88aed01a0206e1468bdc705"
  },
  {
    "url": "settings/external-services.html",
    "revision": "389b40a075c1908bdff2a853202b07ed"
  },
  {
    "url": "settings/external-storage.html",
    "revision": "9a8f206ff27f759c3a297e65e1d5b662"
  },
  {
    "url": "settings/flood-protection.html",
    "revision": "eb1f8f01117f79f4f2902e580787d0e7"
  },
  {
    "url": "settings/guest-api.html",
    "revision": "af2af02ce6fc42778724901b7fd98999"
  },
  {
    "url": "settings/homepage.html",
    "revision": "c6587336ee254f68d43bb2427aa58e68"
  },
  {
    "url": "settings/image-upload.html",
    "revision": "fcff8ef1283587f6738f47dbcceb0f98"
  },
  {
    "url": "settings/ip-bans.html",
    "revision": "0ce1c62e93e6b6a2c3ee2e1471655fb7"
  },
  {
    "url": "settings/languages.html",
    "revision": "88aff722a7bf6197652740088312eed1"
  },
  {
    "url": "settings/listings.html",
    "revision": "484f62756a3e3c57f688e8d15a5704c4"
  },
  {
    "url": "settings/login-providers.html",
    "revision": "62156806e37f2a67e67f99d1bc38d34d"
  },
  {
    "url": "settings/logo.html",
    "revision": "6f659a63bebb698b95bfbdd26272603d"
  },
  {
    "url": "settings/pages.html",
    "revision": "cecd890b5d385fc30bd3ed873ecd43f9"
  },
  {
    "url": "settings/routing.html",
    "revision": "d71b6a9493e541d787f94d7b2c0f3b2e"
  },
  {
    "url": "settings/semantics.html",
    "revision": "d3f88feab4bad91dd6592090c8dc46f1"
  },
  {
    "url": "settings/system.html",
    "revision": "96ef06b0c2dc5f24f78be2ee66092fe0"
  },
  {
    "url": "settings/theme.html",
    "revision": "9e5c30aa4cdf527e4df9360a94c7dee5"
  },
  {
    "url": "settings/tools.html",
    "revision": "688aeeff1d338210c83628db30cf39ad"
  },
  {
    "url": "settings/upload-plugin.html",
    "revision": "aa76c249621f344767f4d9cb35f6b578"
  },
  {
    "url": "settings/users.html",
    "revision": "b77cd84cf6393cd8d78bd1937e8d4652"
  },
  {
    "url": "settings/watermarks.html",
    "revision": "d4fccadccf3db586c51767de3abfc7dd"
  },
  {
    "url": "settings/website.html",
    "revision": "c03babb17bb0c605317f44aa51c60ad9"
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

// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-tags-js": () => import("../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-affiliate-disclosure-js": () => import("../src/pages/affiliate-disclosure.js" /* webpackChunkName: "component---src-pages-affiliate-disclosure-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-privacy-policy-js": () => import("../src/pages/privacy-policy.js" /* webpackChunkName: "component---src-pages-privacy-policy-js" */),
  "component---src-pages-success-js": () => import("../src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */)
}


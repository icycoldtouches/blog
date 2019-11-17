const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/templates/post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/templates/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/pages/about.js"))),
  "component---src-pages-affiliate-disclosure-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/pages/affiliate-disclosure.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/pages/index.js"))),
  "component---src-pages-privacy-policy-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/pages/privacy-policy.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/pascal/Desktop/furrycanines/src/pages/success.js")))
}


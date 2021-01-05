var plugins = [{
      plugin: require('/Users/pascal/Desktop/furrycanines/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/pascal/Desktop/furrycanines/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('/Users/pascal/Desktop/furrycanines/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"src/styles/typography/index.js"},
    },{
      plugin: require('/Users/pascal/Desktop/furrycanines/node_modules/gatsby-plugin-html-attributes/gatsby-ssr'),
      options: {"plugins":[],"lang":"en"},
    },{
      plugin: require('/Users/pascal/Desktop/furrycanines/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Furry Canines","short_name":"Furry Canines","start_url":"/","background_color":"#fff","theme_color":"#136176","display":"standalone","icon":"./images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"94428d2e2219774d4a4be89536ec4216"},
    },{
      plugin: require('/Users/pascal/Desktop/furrycanines/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["/404","/about","/affiliate-disclosure","/index","/privacy-policy","/dog-breeds","/dog-care","/dog-health","/dog-training","/dog-supplies"]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

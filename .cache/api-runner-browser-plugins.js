module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/styles/typography/index.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Furry Canines","short_name":"Furry Canines","start_url":"/","background_color":"#fff","theme_color":"#136176","display":"standalone","icon":"./images/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"94428d2e2219774d4a4be89536ec4216"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/404","/about","/affiliate-disclosure","/index","/privacy-policy","/dog-breeds","/dog-care","/dog-health","/dog-training","/dog-supplies"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/styles/typography/index.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Furry Canines","short_name":"Furry Canines","start_url":"/","background_color":"#fff","theme_color":"#136176","display":"standalone","icon":"./images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/404","/about","/affiliate-disclosure","/index","/privacy-policy","/dog-breeds","/dog-care","/dog-health","/dog-training","/dog-supplies"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

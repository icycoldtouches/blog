const config = require('./config');
require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: config.siteTitle,
        titleTemplate: `%s - Knowledge Makes Your Dog happy.`,
        description: `Furry Canines Team offers practical, real-life tips and training advice to help you properly care for your dog.`,
        url: 'https://furrycanines.com',
        siteUrl: 'https://furrycanines.com',
        image: `/images/_MG_0651.jpeg`,
        twitterUsername: `@furrycanines`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/sitemap.xml`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: `gatsby-remark-images-contentful`,
            options: {
                maxWidth: 960
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/styles/typography/index.js`
            }
        },
        {
            resolve: `gatsby-plugin-mailchimp`,
            options: {
                endpoint: `https://furrycanines.us20.list-manage.com/subscribe/post?u=b5d46c8850b011c0b76212b85&amp;id=3161f7ec1d`
            }
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en'
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.furrycanines.com',
                sitemap: 'https://www.furrycanines.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
                output: './robots.txt'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Furry Canines`,
                short_name: `Furry Canines`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#136176`,
                display: `standalone`,
                icon: `./images/favicon.png`
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [
                    `/404`,
                    `/about`,
                    `/affiliate-disclosure`,
                    `/index`,
                    `/privacy-policy`,
                    `/dog-breeds`,
                    `/dog-care`,
                    `/dog-health`,
                    `/dog-training`,
                    `/dog-supplies`
                ]
            }
        },
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                mergeSecurityHeaders: true,
                mergeLinkHeaders: true,
                mergeCachingHeaders: true,
                transformHeaders: (headers, path) => headers,
                generateMatchPathRewrites: true
            }
        }
    ]
};

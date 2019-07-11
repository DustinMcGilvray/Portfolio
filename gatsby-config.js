const moment = require('moment') 
const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
const endDate = moment().format('YYYY-MM-DD')

module.exports = {
  siteMetadata: {
    title: 'Dustin McGilvray',
    symbol: 'D|M',
    template: 'https://github.com/xydac/xylo-gatsby-bulma-starter/blob/master/src/components/header.js'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: [`400`, '400i'],
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `400i`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-openweathermap`,
      options: {
        apikey: '7c2ef146781b36100bc270e676a56f95',
        location: 'Tyler',
        units: 'imperial',
        type: 'forecast'
      },
    },
    {
      resolve: 'gatsby-source-thirdparty',
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://wakatime.com/api/v1/users/current/summaries?api_key=eb116994-9948-4c70-88de-71eb4d07d84f&start=${startDate}&end=${endDate}`,
  
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `wakatime`,
      }
    },
    {
      resolve: 'gatsby-source-thirdparty',
      options: {
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=b6f739a31b20487fb0a56b712ec890b4`,
  
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `newsapi`,
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",
  
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://listen-api.listennotes.com/api/v2/curated_podcasts/fX8Lg9QNPdY`,
  
        method: "get",
  
        headers: {
          "Content-Type": "application/json",
          'X-ListenAPI-Key': 'a4539543e2ec4e228042992bb87f0f1d'
        },
  
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `podcasts`,
  
        // Nested level of entities in response object, example: `data.posts`
        entityLevel: `data.podcasts`,
  
        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 1
        },
  
        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        payloadKey: `body`,
  
        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: false,
  
        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/data/auth/`,
  
        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes
  
        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want
  
        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: true,
  
        // Optionally override key used to re-source data
        // when `gatsby develop` is running.
        // Requires `enableDevRefresh: true`.
        // See setting directly above this one.
        // See also https://github.com/gatsbyjs/gatsby/issues/14653
        // Default is `id`
        refreshId: `id`,
  
        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        entitiesArray: [
          {
            url: `http://yourapi.com/api/v1/posts`,
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            name: `posts`
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCW5YeuERMmlnqo4oq8vwUpg', 'UCK8sQmJBp8GCxrOtXWBpyEA'],
        apiKey: 'AIzaSyCAOInlc3UOPNByCzYwdUftfKMTdcgDx3I',
        maxVideos: 50 // Defaults to 50
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
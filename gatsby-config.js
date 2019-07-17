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
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCW5YeuERMmlnqo4oq8vwUpg', 'UCK8sQmJBp8GCxrOtXWBpyEA'],
        apiKey: 'AIzaSyCAOInlc3UOPNByCzYwdUftfKMTdcgDx3I',
        maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: "https://listen-api.listennotes.com/api/v2/curated_podcasts/aPNowE9Z8FU",
        method:"get",
        headers:{
          "X-ListenAPI-Key": "a4539543e2ec4e228042992bb87f0f1d"
        },
          name: "podcasts",
      }
    },
      
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
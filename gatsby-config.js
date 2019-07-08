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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
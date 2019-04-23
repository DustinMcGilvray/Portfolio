module.exports = {
  siteMetadata: {
    title: 'Dustin McGilvray',
    initials: 'D|M',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Pepita Maria Bauhardt',
    description: 'Pepita Maria Bauhardt - Dancer, Choach and Choreographer',
    baseUrl: 'https://pepita-testing.netlify.app/', // TODO: use correct url
    email: 'booking@pepitabauhardt.com',
    facebook: 'https://www.facebook.com/pepita.bauhardt/?ref=page_internal',
    instagram: 'https://www.instagram.com/pepijuno/?hl=de',
    youtube:
      'https://www.youtube.com/channel/UCfVMLPpVfi1yAh7CcNuH2Zg/featured',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-loadable-components-ssr',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'data',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUDNLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};

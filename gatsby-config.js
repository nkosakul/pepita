require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Pepita Maria Bauhardt',
    description: 'Pepita Maria Bauhardt Bescheibung', // TODO: add real description
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
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

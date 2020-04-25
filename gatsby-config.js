require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Pepita Maria Bauhardt',
    description: 'Pepita Maria Bauhardt Bescheibung', // TODO: add real description
    email: 'booking@pepitabauhardt.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
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

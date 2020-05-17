require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-loadable-components-ssr',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'data',
      },
    },
  ],
};

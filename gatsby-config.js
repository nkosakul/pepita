require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Pepita Maria Bauhardt',
    description: 'Pepita Maria Bauhardt - Dancer, Choach and Choreographer',
    baseUrl: 'https://www.pepitabauhardt.com/',
    email: 'booking@pepitabauhardt.com',
    facebook: 'https://www.facebook.com/pepita.bauhardt/?ref=page_internal',
    instagram: 'https://www.instagram.com/pepitabauhardt/',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pepita Maria Bauhardt',
        short_name: 'Pepita',
        start_url: `/`,
        description: 'Pepita Maria Bauhardt - Dancer, Choach and Choreographer',
        background_color: `#222222`,
        theme_color: `#d2253d`,
        display: `standalone`,
        lang: 'de',
        icon: './static/favicon.ico',
        icons: [
          {
            src: './static/favicon-32.png',
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: './static/favicon-57.png',
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: './static/favicon-76.png',
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: './static/favicon-96.png',
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: './static/favicon-120.png',
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: './static/favicon-128.png',
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: './static/favicon-152.png',
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: './static/favicon-180.png',
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: './static/favicon-196.png',
            sizes: `196x196`,
            type: `image/png`,
          },
          {
            src: './static/favicon-228.png',
            sizes: `228x228`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};

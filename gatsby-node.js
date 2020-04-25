const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const contenfulResult = await graphql(`
    query {
      allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `);

  if (contenfulResult.error) {
    reporter.panic('failed to create pages', contenfulResult.errors);
  }

  const contenfulPages = contenfulResult.data.allContentfulPage.nodes;
  contenfulPages.forEach((page) => {
    // we dont want to create the index page twice, because we already created this in page/index.js
    if (page.slug !== 'index') {
      actions.createPage({
        path: page.slug,
        component: path.resolve('./src/templates/page.js'),
        context: {
          slug: page.slug,
        },
      });
    }
  });
};

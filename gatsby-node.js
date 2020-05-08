const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const contenfulResults = await graphql(`
    query {
      allContentfulPage {
        nodes {
          slug
          pageTitle
        }
      }
      allContentfulWork {
        nodes {
          slug
          pageTitle
        }
      }
    }
  `);

  if (contenfulResults.error) {
    reporter.panic('failed to create pages', contenfulResults.errors);
  }

  const contenfulPages = contenfulResults.data.allContentfulPage.nodes;

  contenfulPages.forEach((page) => {
    // we dont want to create the index page twice, because we already created this in page/index.js
    if (page.slug !== 'index') {
      actions.createPage({
        path: page.slug,
        component: path.resolve('./src/templates/page.js'),
        context: {
          slug: page.slug,
          pageTitle: page.pageTitle,
        },
      });
    }
  });

  const contenfulWorks = contenfulResults.data.allContentfulWork.nodes;

  contenfulWorks.forEach((work) => {
    actions.createPage({
      path: work.slug,
      component: path.resolve('./src/templates/work.js'),
      context: {
        slug: work.slug,
        pageTitle: work.pageTitle,
      },
    });
  });
};

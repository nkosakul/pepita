const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const contenfulResults = await graphql(`
    query {
      allContentfulPage(filter: { slug: { ne: "index" } }) {
        nodes {
          slug
          pageTitle
        }
      }
      allContentfulWork(filter: { slug: { ne: "example-work" } }) {
        nodes {
          slug
          pageTitle
          createPage
        }
      }
    }
  `);

  if (contenfulResults.error) {
    reporter.panic('failed to create pages', contenfulResults.errors);
  }

  const contenfulPages = contenfulResults.data.allContentfulPage.nodes;

  contenfulPages.forEach((page) => {
    // we dont want to create the example page
    if (page.slug !== 'example') {
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
    if (work.createPage) {
      actions.createPage({
        path: work.slug,
        component: path.resolve('./src/templates/work.js'),
        context: {
          slug: work.slug,
          pageTitle: work.pageTitle,
        },
      });
    }
  });
};

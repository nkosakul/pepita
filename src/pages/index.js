import React from 'react';
import loadable from '@loadable/component';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "index" }) {
      pageTitle
      elements {
        ... on ContentfulJumbotron {
          __typename
          id
          title
          showSocialmediaIcons
          image {
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulVideo {
          __typename
          id
          youtubeUrl
        }
      }
    }
  }
`;

export default ({ data: { contentfulPage: page } }) => {
  return (
    <>
      <Layout>
        {page.elements.map((element) => {
          const typename = element.__typename.replace('Contentful', '');
          const Component = loadable(() => import(`../components/${typename}`));

          return <Component props={element} key={element.id} />;
        })}
      </Layout>
    </>
  );
};

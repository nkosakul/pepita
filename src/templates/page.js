import React, { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

export const query = useStaticQuery(graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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
      }
    }
  }
`);

export default ({ data: { contentfulPage: page } }) => {
  return (
    <>
      <Layout>
        {page.elements.map((element) => {
          const typename = element.__typename.replace('Contentful', '');
          const Component = lazy(() => import(`../components/${typename}`));

          return (
            <Suspense fallback={<div>Loading...</div>} key={element.id}>
              <Component props={element} />
            </Suspense>
          );
        })}
      </Layout>
    </>
  );
};

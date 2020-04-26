import React from 'react';
// import loadable from '@loadable/component';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      image {
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

export default ({ data: { contentfulWork: page } }) => {
  return (
    <>
      <Layout>
        <h1>{page.title}</h1>
        {/* {page.elements.map((element) => {
          const typename = element.__typename.replace('Contentful', '');
          const Component = loadable(() => import(`../components/${typename}`));

          return <Component props={element} key={element.id} />;
        })} */}
      </Layout>
    </>
  );
};

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
          heading
          youtubeUrl
        }
        ... on ContentfulWorkteaser {
          __typename
          id
          heading
          showHeading
          works {
            id
            slug
            title
            teasertext {
              teasertext
            }
            image {
              title
            }
            oddImage: image {
              title
              fluid(maxWidth: 700, maxHeight: 950) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            evenImage: image {
              title
              fluid(maxWidth: 965, maxHeight: 765) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
        ... on ContentfulImageteaser {
          __typename
          id
          heading
          showHeading
          slug
          linktext
          title
          imagePosition
          teasertext {
            teasertext
          }
          image {
            title
          }
          oddImage: image {
            title
            fluid(maxWidth: 700, maxHeight: 950) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          evenImage: image {
            title
            fluid(maxWidth: 965, maxHeight: 765) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default ({ data: { contentfulPage: page } }) => {
  const showFooterHeading = true;

  return (
    <>
      <Layout showFooterHeading={showFooterHeading}>
        {page.elements.map((element) => {
          const typename = element.__typename.replace('Contentful', '');
          const Component = loadable(() => import(`../components/${typename}`));

          return <Component props={element} key={element.id} />;
        })}
      </Layout>
    </>
  );
};

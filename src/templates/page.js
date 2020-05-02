import React from 'react';
import loadable from '@loadable/component';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
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
        ... on ContentfulVideo {
          __typename
          id
          heading
          youtubeUrl
          showHeading
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
              fluid(maxWidth: 700, maxHeight: 950) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            evenImage: image {
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
            fluid(maxWidth: 700, maxHeight: 950) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          evenImage: image {
            fluid(maxWidth: 965, maxHeight: 765) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulAboutteaser {
          __typename
          id
          heading
          showHeading
          slug
          linktext
          title
          text {
            text
          }
          image {
            title
          }
          image {
            fluid(maxWidth: 965, maxHeight: 765) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulTextmedia {
          __typename
          id
          title
          text {
            text
          }
        }
        ... on ContentfulImageGallery {
          __typename
          id
          heading
          showHeading
          images {
            id
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
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

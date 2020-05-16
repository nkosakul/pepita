import React from 'react';
import loadable from '@loadable/component';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
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
            pageTitle
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
            json
          }
          image {
            title
            fluid {
              src
            }
          }
          youtubeUrl
        }
        ... on ContentfulImageGallery {
          __typename
          id
          heading
          showHeading
          teaserText
          images {
            id
            title
            description
            file {
              details {
                image {
                  width
                  height
                }
              }
            }
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
            lightboxImage: fluid {
              src
            }
          }
        }
        ... on ContentfulImageSlider {
          __typename
          id
          title
          images {
            title
            description
            file {
              details {
                image {
                  width
                  height
                }
              }
            }
            fluid(maxHeight: 440) {
              ...GatsbyContentfulFluid_withWebp
            }
            lightboxImage: fluid {
              src
            }
          }
        }
        ... on ContentfulImageBanner {
          __typename
          id
          title
          subtitle
          image {
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulBlockquoteSlider {
          __typename
          id
          title
          blockquotes {
            author
            position
            quote {
              json
            }
          }
        }
        ... on ContentfulTexthighlight {
          __typename
          id
          title
          text {
            json
          }
          image {
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulWorklist {
          __typename
          id
          title
          image {
            title
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulContactform {
          __typename
          id
          title
          backgroundImage {
            title
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default ({ pageContext, data: { contentfulPage: page } }) => {
  return (
    <>
      <Layout>
        <SEO pageTitle={pageContext.pageTitle} pageUrl={pageContext.slug} />
        {page.elements &&
          page.elements.map((element) => {
            const typename = element.__typename.replace('Contentful', '');
            const Component = loadable(() =>
              import(`../components/${typename}`)
            );

            return <Component props={element} key={element.id} />;
          })}
      </Layout>
    </>
  );
};

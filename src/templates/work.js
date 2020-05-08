import React from 'react';
import loadable from '@loadable/component';
import Layout from '../components/Layout';
import Introheader from '../components/Introheader';
import { graphql } from 'gatsby';
import SEO from '../components/Seo';

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      pageTitle
      image {
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      elements {
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
          text {
            json
          }
          image {
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp
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
      }
    }
  }
`;

export default ({ pageContext, data: { contentfulWork: page } }) => {
  return (
    <>
      <Layout>
        <SEO
          pageTitle={pageContext.pageTitle}
          pageDescription={pageContext.pageTitle}
          pageUrl={pageContext.slug}
        />
        <Introheader props={page} />
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

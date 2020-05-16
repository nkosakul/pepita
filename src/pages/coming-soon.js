import React from 'react';
import SEO from '../components/Seo';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import '../styles/index.scss';

export const query = graphql`
  query {
    background: file(relativePath: { eq: "pepita.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    comingSoon: file(relativePath: { eq: "coming-soon.png" }) {
      sharp: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <>
      <SEO />
      <section className="jumbotron jumbotron--coming-soon" data-header>
        <div className="jumbotron__image">
          <Image
            fluid={data.background.sharp.fluid}
            alt="Foto von Pepita Maria Bauhardth"
          />
        </div>

        <div className="jumbotron__inner">
          <div className="jumbotron__context">
            <h1 className="sr-only">Coming Soon</h1>
            <div className="coming-soon-logo">
              <Image
                fluid={data.comingSoon.sharp.fluid}
                alt="Cooming Soon Vektorgrafik"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//TODO: Delete this after page goes online

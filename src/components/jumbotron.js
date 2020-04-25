import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "jumbotron.jpg" }) {
        sharp: childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  return (
    <section className="jumbotron">
      <div className="jumbotron__image">
        <Image fluid={data.image.sharp.fluid} alt="placeholder" />
      </div>

      <div className="jumbotron__inner">
        <div className="jumbotron__context">
          <h1 className="sr-only">Pepita Maria Bauhardt</h1>
          <h2>
            Dancer.
            <br />
            Coach. Choreographer.
          </h2>
        </div>

        <ul className="jumbotron__socialmedia">
          <li className="jumbotron__list-item">
            <a href="/" className="button--round">
              <i className="icon-instagram" aria-hidden="true"></i>
              <span className="sr-only">Zur Instagram Seite</span>
            </a>
          </li>
          <li className="jumbotron__list-item">
            <a href="/" className="button--round">
              <i className="icon-facebook" aria-hidden="true"></i>
              <span className="sr-only">Zur Facebook Seite</span>
            </a>
          </li>
          <li className="jumbotron__list-item">
            <a href="/" className="button--round">
              <i className="icon-youtube" aria-hidden="true"></i>
              <span className="sr-only">Zur Youtube Seite</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Jumbotron;

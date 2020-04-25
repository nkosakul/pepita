import React from 'react';
import Image from 'gatsby-image';

const Jumbotron = ({ props }) => (
  <section className="jumbotron">
    <div className="jumbotron__image">
      <Image fluid={props.image.fluid} alt={props.image.title} />
    </div>

    <div className="jumbotron__inner">
      <div className="jumbotron__context">
        <h1
          className="is-h2"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      </div>

      {props.showSocialmediaIcons && (
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
      )}
    </div>
  </section>
);

export default Jumbotron;

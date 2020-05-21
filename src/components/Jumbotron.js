import React, { useRef, useEffect } from 'react';
import Image from 'gatsby-image';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Jumbotron = ({ props }) => {
  const textEl = useRef(null);
  const { facebook, instagram, youtube } = useSiteMetadata();

  useEffect(() => {
    textEl.current.classList.add('fade-in');
  }, []);

  return (
    <section className="jumbotron" data-header>
      <div className="jumbotron__image">
        <Image fluid={props.image.fluid} alt={props.image.title} />
      </div>

      <div className="jumbotron__inner">
        <div className="jumbotron__context" ref={textEl}>
          <h1
            className="is-h2"
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
        </div>

        {props.showSocialmediaIcons && (
          <ul className="jumbotron__socialmedia">
            <li className="jumbotron__list-item">
              <a
                href={instagram}
                className="button--round"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-instagram" aria-hidden="true"></i>
                <span className="sr-only">Zur Instagram Seite</span>
              </a>
            </li>
            <li className="jumbotron__list-item">
              <a
                href={facebook}
                className="button--round"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-facebook" aria-hidden="true"></i>
                <span className="sr-only">Zur Facebook Seite</span>
              </a>
            </li>
            <li className="jumbotron__list-item">
              <a
                href={youtube}
                className="button--round"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-youtube" aria-hidden="true"></i>
                <span className="sr-only">Zur Youtube Seite</span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default Jumbotron;

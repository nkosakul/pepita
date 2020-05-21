import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import FromCenter from '../modules/from-center';

const Aboutteaser = ({ props }) => {
  const titleEl = useRef(null);

  useEffect(() => {
    // Fade-In Animation
    if (titleEl.current) {
      const title = titleEl.current;
      new FromCenter(title, 'scroll', ({ position, offset }) => {
        if (position === 'inside') {
          title.style.transform = `translateX(${
            offset / 3
          }px) translateY(-80%)`;
        }
      }).start();
    }
  }, []);

  const slug = props.slug[0] === '/' ? props.slug.slice(1) : props.slug;
  return (
    <section
      className={`about-teaser ${
        props.showHeading && 'about-teaser--large-space'
      }`}
    >
      {props.showHeading && (
        <h2 className="section-heading" ref={titleEl}>
          {props.heading}
        </h2>
      )}
      <div className="about-teaser__inner">
        <div className="about-teaser__image">
          <Image fluid={props.image.fluid} alt={props.image.title} />
        </div>
        <div className="about-teaser__context">
          <h3 className="about-teaser__title">{props.title}</h3>
          <p className="about-teaser__text">{props.text.text}</p>
          <Link to={`/${slug}/`} className="button">
            {props.linktext}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutteaser;

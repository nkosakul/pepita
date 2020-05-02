import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Aboutteaser = ({ props }) => {
  const slug = props.slug[0] === '/' ? props.slug.slice(1) : props.slug;
  return (
    <section
      className={`about-teaser ${
        props.showHeading && 'about-teaser--large-space'
      }`}
    >
      {props.showHeading && (
        <h2 className="section-heading">{props.heading}</h2>
      )}
      <div className="about-teaser__inner">
        <div className="about-teaser__image">
          <Image fluid={props.image.fluid} alt={props.image.title} />
        </div>
        <div className="about-teaser__context">
          <h3 className="about-teaser__title">{props.title}</h3>
          <p className="about-teaser__text">{props.text.text}</p>
          <Link to={`/${slug}/`} className="button button--inverted">
            {props.linktext}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutteaser;

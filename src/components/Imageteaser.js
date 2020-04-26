import React from 'react';
import { Link } from 'gatsby';

const Imageteaser = () => {
  return (
    <div className="image-teaser image-teaser--large-space">
      <h2 className="section-heading">Latest projects</h2>
      <div className="image-teaser__inner">
        <div className="image-teaser__image">
          <img src="https://i.picsum.photos/id/516/500/700.jpg" alt="asd" />
        </div>
        <div className="image-teaser__context">
          <h3 className="image-teaser__title">Coaching Antifuchs</h3>
          <p className="image-teaser__text">
            Performance Training & Stage Coahing
          </p>
          <Link to="/" className="button">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Imageteaser;

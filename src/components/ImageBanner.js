import React from 'react';
import Image from 'gatsby-image';

const Imagebanner = ({ props }) => (
  <div className="image-banner">
    <Image fluid={props.image.fluid} alt={props.image.title} />
    <div className="image-banner__inner">
      <div className="image-banner__context">
        {props.subtitle && (
          <p className="image-banner__subtitle">{props.subtitle}</p>
        )}
        {props.title && <h2 className="image-banner__title">{props.title}</h2>}
      </div>
    </div>
  </div>
);

export default Imagebanner;

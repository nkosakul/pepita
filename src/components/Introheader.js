import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

const Introheader = ({ props }) => (
  <div className="intro-header">
    <div className="intro-header__image">
      <Img
        fluid={props.image.fluid}
        objectFit="cover"
        alt={props.image.title}
      />
    </div>
    <div className="intro-header__inner">
      <h1
        className="intro-header__title"
        dangerouslySetInnerHTML={{
          __html: props.title,
        }}
      ></h1>
    </div>
  </div>
);

export default Introheader;

import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';

const Introheader = ({ props }) => (
  <div className="intro-header" data-header>
    <div className="intro-header__image">
      <Img
        fluid={props.image.fluid}
        objectFit="cover"
        alt={props.image.pageTitle}
      />
    </div>
    <div className="intro-header__inner">
      <h1 className="intro-header__title">{props.pageTitle}</h1>
    </div>
  </div>
);

export default Introheader;

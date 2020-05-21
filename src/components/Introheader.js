import React, { useEffect, useRef } from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import FromCenter from '../modules/from-center';

const Introheader = ({ props }) => {
  const titleEl = useRef(null);

  useEffect(() => {
    // Fade-In Animation
    const title = titleEl.current;
    if (title) {
      let firstRun = true;
      new FromCenter(title, 'scroll', ({ percentage, position }) => {
        if (position === 'above') {
          title.classList.add('fade-in');
          firstRun = false;
        } else if (
          firstRun &&
          position === 'inside' &&
          (parseFloat(percentage) < parseFloat(-0.2) || percentage === 1)
        ) {
          title.classList.add('fade-in');
          firstRun = false;
        }
      }).start();
    }
  }, []);

  return (
    <div className="intro-header" data-header>
      <div className="intro-header__image">
        <Img
          fluid={props.image.fluid}
          objectFit="cover"
          alt={props.image.pageTitle}
        />
      </div>
      <div className="intro-header__inner">
        <h1 className="intro-header__title" ref={titleEl}>
          {props.pageTitle}
        </h1>
      </div>
    </div>
  );
};

export default Introheader;

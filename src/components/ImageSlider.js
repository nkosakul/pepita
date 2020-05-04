import React from 'react';
import Flickity from 'react-flickity-component';
import Img from 'gatsby-image/withIEPolyfill';

const flickityOptions = {
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
  cellAlign: 'left',
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 40,
    x3: 20,
  },
};

const ImageSlider = ({ props }) => (
  <section className="image-slider">
    {props.title && <h2 className="image-slider__title">{props.title}</h2>}
    <div className="image-slider__flickity">
      <Flickity options={flickityOptions}>
        {props.images.map((image, index) => (
          <div className="image-slider__image" key={`image-${index}`}>
            <Img fluid={image.fluid} objectFit="cover" alt={image.title} />
          </div>
        ))}
      </Flickity>
    </div>
  </section>
);

export default ImageSlider;

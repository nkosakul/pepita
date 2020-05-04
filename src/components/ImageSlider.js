import React from 'react';
import Flickity from 'react-flickity-component';

const ImageSlider = () => (
  <Flickity>
    <img src="https://placeimg.com/640/480/animals" alt="test" />
    <img src="https://placeimg.com/640/480/nature" alt="test" />
    <img src="https://placeimg.com/640/480/architecture" alt="test" />
  </Flickity>
);

export default ImageSlider;

import React from 'react';

const ImageGallery = ({ props }) => (
  <div className="image-gallery">
    {props.showHeading && (
      <h2 className="image-gallery__title">{props.heading}</h2>
    )}
  </div>
);

export default ImageGallery;

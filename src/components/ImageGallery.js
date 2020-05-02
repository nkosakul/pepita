import React, { useEffect } from 'react';
import MasonryLayout from 'react-masonry-layout';
import Image from 'gatsby-image';

const sizes = [
  { columns: 1, gutter: 0 },
  { mq: '601px', columns: 2, gutter: 0 },
  { mq: '768px', columns: 3, gutter: 0 },
  { mq: '1025px', columns: 4, gutter: 0 },
];

const ImageGallery = ({ props }) => {
  let masonryInstance = null;

  useEffect(() => {
    const bricksInstance = masonryInstance.getBricksInstance();
    bricksInstance.pack().resize(true);
    window.addEventListener('resize', () => bricksInstance.pack(), {
      passive: true,
    });
  }, [masonryInstance]);

  return (
    <div className="image-gallery">
      {props.showHeading && (
        <h2 className="image-gallery__title">{props.heading}</h2>
      )}
      <div className="image-gallery__items">
        <MasonryLayout
          id="masonry-layout"
          position={true}
          sizes={sizes}
          ref={(instance) => (masonryInstance = instance)}
        >
          {props.images.map((image, index) => (
            <div key={`image-${index}`} className="image-gallery__item">
              <Image fluid={image.fluid} alt={image.title} />
            </div>
          ))}
        </MasonryLayout>
      </div>

      {props.teaserText && (
        <p
          className="image-gallery__text"
          dangerouslySetInnerHTML={{
            __html: props.teaserText,
          }}
        ></p>
      )}
    </div>
  );
};

export default ImageGallery;

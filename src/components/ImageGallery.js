import React, { useState, useEffect } from 'react';
import MasonryLayout from 'react-masonry-layout';
import Image from 'gatsby-image';
import { PhotoSwipe } from 'react-pswp';

const ImageGallery = ({ props }) => {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);
  let masonryInstance = null;

  const sizes = [
    { columns: 1, gutter: 0 },
    { mq: '601px', columns: 2, gutter: 0 },
    { mq: '768px', columns: 3, gutter: 0 },
    { mq: '1025px', columns: 4, gutter: 0 },
  ];

  const container = props.images.map((image, i) => ({
    uid: i,
    src: image.lightboxImage.src,
    w: image.file.details.image.width,
    h: image.file.details.image.height,
    title: image.description ? image.description : '',
  }));

  const openLightbox = (index) => {
    setIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    const bricksInstance = masonryInstance.getBricksInstance();
    bricksInstance.pack().resize(true);
    window.addEventListener('resize', () => bricksInstance.pack(), {
      passive: true,
    });
  }, [masonryInstance]);

  return (
    <>
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
                <button
                  className="lightbox-button"
                  onClick={() => openLightbox(index)}
                >
                  <Image fluid={image.fluid} alt={image.title} />
                </button>
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

      <div>
        <PhotoSwipe
          container={container}
          onIndexChange={setIndex}
          onOpenChange={setOpen}
          index={index}
          open={open}
          theme={{
            foreground: '#fff',
            background: '#222',
          }}
        />
      </div>
    </>
  );
};

export default ImageGallery;

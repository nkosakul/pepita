import React, { useState, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import Img from 'gatsby-image/withIEPolyfill';
import { PhotoSwipe } from 'react-pswp';

const ImageSlider = ({ props }) => {
  const [index, setIndex] = useState(null);
  const [open, setOpen] = useState(false);
  let flkty;

  const flickityOptions = {
    pageDots: false,
    freeScroll: true,
    wrapAround: false, // bug with photoswipe if 'true'
    contain: true,
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
    flkty &&
      flkty.on('staticClick', function (
        event,
        pointer,
        cellElement,
        cellIndex
      ) {
        openLightbox(cellIndex);
      });
  }, [flkty]);

  return (
    <>
      <section className="image-slider">
        {props.title && <h2 className="image-slider__title">{props.title}</h2>}
        <div className="image-slider__flickity">
          <Flickity options={flickityOptions} flickityRef={(c) => (flkty = c)}>
            {props.images.map((image, index) => (
              <div className="image-slider__image" key={`image-${index}`}>
                <button className="image-slider__button">
                  <Img
                    fluid={image.fluid}
                    objectFit="cover"
                    alt={image.title}
                  />
                </button>
              </div>
            ))}
          </Flickity>
        </div>
      </section>

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

export default ImageSlider;

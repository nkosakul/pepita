import React from 'react';
import Flickity from 'react-flickity-component';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlockquoteSlider = ({ props }) => {
  const flickityOptions = {
    pageDots: false,
    freeScroll: false,
    cellAlign: 'left',
    adaptiveHeight: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 40,
      x3: 20,
    },
  };

  return (
    <section className="blockquote-slider">
      <div className="blockquote-slider__flickity">
        <Flickity options={flickityOptions}>
          {props.blockquotes.map((blockquote, index) => (
            <blockquote
              className="blockquote-slider__item"
              key={`image-${index}`}
            >
              {documentToReactComponents(blockquote.quote.json)}
              {(blockquote.author || blockquote.position) && (
                <footer className="blockquote-slider__footer">
                  <span className="blockquote-slider__author">
                    {blockquote.author}
                  </span>
                  <br />
                  <span className="blockquote-slider__author-position">
                    {blockquote.position}
                  </span>
                </footer>
              )}
            </blockquote>
          ))}
        </Flickity>
      </div>
    </section>
  );
};

export default BlockquoteSlider;

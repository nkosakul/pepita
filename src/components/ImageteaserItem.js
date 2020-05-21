import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import FromCenter from '../modules/from-center';

const ImageteaserItem = ({ item, imageLeft }) => {
  const sectionEl = useRef(null);
  const imageEl = useRef(null);
  // Catch if user used absolute or relative url
  const isAbsolute = item.slug.includes('http');
  const slug = item.slug[0] === '/' ? item.slug.slice(1) : item.slug;

  useEffect(() => {
    // Fade-In Animation
    const teaser = sectionEl.current;
    if (teaser) {
      let firstRun = true;
      new FromCenter(teaser, 'scroll', ({ offset, percentage, position }) => {
        if (position === 'above') {
          teaser.classList.add('fade-in');
          firstRun = false;
        } else if (
          firstRun &&
          position === 'inside' &&
          (parseFloat(percentage) < parseFloat(-0.2) || percentage === 1)
        ) {
          teaser.classList.add('fade-in');
          firstRun = false;
        }

        // image animation
        if (imageEl.current && position === 'inside') {
          imageEl.current.style.transform = `translateY(${offset / 5}px)`;
        }
      }).start();
    }
  }, []);

  return (
    <div
      className={`image-teaser__item ${
        !imageLeft ? 'image-teaser__item--reverse' : ''
      }`}
      ref={sectionEl}
    >
      <div className="image-teaser__inner">
        <div className="image-teaser__image" ref={imageEl}>
          <Image
            fluid={!imageLeft ? item.evenImage.fluid : item.oddImage.fluid}
            alt={item.image.title}
          />
        </div>
        <div className="image-teaser__context">
          <h3 className="image-teaser__title">
            {item.title || item.pageTitle}
          </h3>
          <p className="image-teaser__text">{item.teasertext.teasertext}</p>

          {item.slug && !isAbsolute ? (
            <Link to={`/${slug}/`} className="button">
              {item.linktext ? item.linktext : 'more'}

              {!item.linktext && (
                <span className="sr-only">
                  about {item.title || item.pageTitle}
                </span>
              )}
            </Link>
          ) : (
            ''
          )}
          {item.slug && isAbsolute ? (
            <a
              href={item.slug}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.linktext ? item.linktext : 'more'}
              {!item.linktext && (
                <span className="sr-only">
                  about {item.title || item.pageTitle}
                </span>
              )}
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageteaserItem;

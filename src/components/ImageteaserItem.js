import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ImageteaserItem = ({ item, imageLeft }) => {
  // Catch if user used absolute or relative url
  const isAbsolute = item.slug.includes('http');
  const slug = item.slug[0] === '/' ? item.slug.slice(1) : item.slug;

  return (
    <div
      className={`image-teaser__item ${
        !imageLeft ? 'image-teaser__item--reverse' : ''
      }`}
    >
      <div className="image-teaser__inner">
        <div className="image-teaser__image">
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
            </Link>
          ) : (
            ''
          )}
          {item.slug && isAbsolute ? (
            <a href={item.slug} className="button">
              {item.linktext ? item.linktext : 'more'}
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

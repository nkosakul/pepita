import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ImageteaserItem = ({ item, imageLeft }) => {
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
            fluid={imageLeft ? item.evenImage.fluid : item.oddImage.fluid}
            alt={item.image.title}
          />
        </div>
        <div className="image-teaser__context">
          <h3 className="image-teaser__title">{item.title}</h3>
          <p className="image-teaser__text">{item.teasertext.teasertext}</p>
          {item.slug && (
            <Link to={`/${slug}/`} className="button">
              {item.linktext ? item.linktext : 'more'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageteaserItem;

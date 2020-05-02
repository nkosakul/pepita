import React from 'react';
import ImageteaserItem from './ImageteaserItem';

const Imageteaser = ({ props }) => {
  return (
    <>
      <section
        className={`image-teaser ${
          props.showHeading && 'image-teaser--large-space'
        }`}
      >
        {props.showHeading && (
          <h2 className="section-heading">{props.heading}</h2>
        )}
        {props.works ? (
          props.works.map((work, index) => (
            <ImageteaserItem
              item={work}
              imageLeft={(index + 1) % 2 !== 0}
              key={work.id}
            />
          ))
        ) : (
          <ImageteaserItem item={props} imageLeft={props.imagePosition} />
        )}
      </section>
    </>
  );
};

export default Imageteaser;

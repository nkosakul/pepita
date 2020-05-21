import React, { useEffect, useRef } from 'react';
import ImageteaserItem from './ImageteaserItem';
import FromCenter from '../modules/from-center';

const Imageteaser = ({ props }) => {
  const titleEl = useRef(null);

  useEffect(() => {
    // Fade-In Animation
    if (titleEl.current) {
      const title = titleEl.current;
      new FromCenter(title, 'scroll', ({ position, offset }) => {
        if (position === 'inside') {
          title.style.transform = `translateX(${offset}px) translateY(-80%)`;
        }
      }).start();
    }
  }, []);

  return (
    <>
      <section
        className={`image-teaser ${
          props.showHeading && 'image-teaser--large-space'
        }`}
      >
        {props.showHeading && (
          <h2 className="section-heading" ref={titleEl}>
            {props.heading}
          </h2>
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

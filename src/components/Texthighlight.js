import React, { useRef, useEffect } from 'react';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AniScroll from '../modules/ani-scroll';

const Texthighlight = ({ props }) => {
  const sectionEl = useRef(null);
  const contextEl = useRef(null);
  const jumpmark = useRef(null);
  const jumpmarkTarget = useRef(null);

  function scrollAnimation() {
    if (contextEl.current) {
      let opacity = 0.6;
      const scrollPosTop = contextEl.current.scrollTop / 1000;
      const actualOpacity = opacity + scrollPosTop;

      if (scrollPosTop > 0 && actualOpacity <= 0.7) {
        jumpmark.current.classList.add('is-active');
        sectionEl.current.style.backgroundColor = `rgba(0, 0, 0, ${
          0.6 + scrollPosTop
        })`;
      } else if (scrollPosTop > 0 && actualOpacity > 0.7) {
        jumpmark.current.classList.add('is-active');
        sectionEl.current.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      } else if (scrollPosTop <= 0) {
        jumpmark.current.classList.remove('is-active');
        sectionEl.current.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      }
    }
  }

  useEffect(() => {
    scrollAnimation();

    const contextDiv = contextEl.current;
    contextDiv && contextDiv.addEventListener('scroll', scrollAnimation);

    // cleanUp if compoenent gets destroys
    return () => {
      contextDiv && contextDiv.removeEventListener('scroll', scrollAnimation);
    };
  }, []);

  return (
    <>
      <section
        className="text-highlight"
        data-header
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        ref={sectionEl}
      >
        <div className="text-highlight__image">
          <Image fluid={props.image.fluid} alt={props.image.title} />
        </div>

        <button
          className="text-highlight__jumpmark"
          ref={jumpmark}
          onClick={() =>
            AniScroll(jumpmarkTarget.current.offsetTop, 600, 'easeOutQuad')
          }
        >
          <span>Text überspringen</span>
          <i className="icon-arrow-down" aria-hidden="true"></i>
        </button>

        <div className="text-highlight__inner">
          <div className="text-highlight__context" ref={contextEl}>
            <h1>{props.title}</h1>
            <div className="text-highlight__textmedia">
              {documentToReactComponents(props.text.json)}
            </div>
          </div>
        </div>
      </section>
      <div id="textHighlightEnd" ref={jumpmarkTarget}></div>
    </>
  );
};

export default Texthighlight;

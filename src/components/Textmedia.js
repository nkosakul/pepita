import React, { useState } from 'react';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Textmedia = ({ props }) => {
  const [iframe, setIframe] = useState(false);

  return (
    <div className="textmedia">
      {props.title && <h1>{props.title}</h1>}
      {props.text && (
        <div className="textmedia__text">
          {documentToReactComponents(props.text.json)}
        </div>
      )}
      {props.image && (
        <div className="textmedia__image">
          <Image fluid={props.image.fluid} alt={props.image.title} />
        </div>
      )}
      {props.youtubeUrl && (
        <div className="textmedia__video">
          <div className="video-player__inner">
            <div>
              {!iframe ? (
                <div className="video-player__overlay">
                  <button
                    className="video-player__btn"
                    onClick={() => setIframe(true)}
                  >
                    <i className="icon-play" aria-hidden="true"></i>
                    <span className="sr-only">Youtube Video starten</span>
                  </button>
                  <Image
                    fluid={props.youtubeThumbnail.fluid}
                    alt={props.youtubeThumbnail.title}
                  />
                </div>
              ) : (
                <iframe
                  className="video-player__iframe"
                  title={props.heading}
                  src={`${props.youtubeUrl}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Textmedia;

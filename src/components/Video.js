import React, { useState } from 'react';
import Image from 'gatsby-image';

const Video = ({ props }) => {
  const [iframe, setIframe] = useState(false);

  return (
    <section className="video-player">
      {props.showHeading && (
        <h2 className="video-player__title">{props.heading}</h2>
      )}
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
              {props.youtubeThumbnail ? (
                <Image
                  fluid={props.youtubeThumbnail.fluid}
                  alt={props.youtubeThumbnail.title}
                />
              ) : (
                ''
              )}
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
    </section>
  );
};

export default Video;

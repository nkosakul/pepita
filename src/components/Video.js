import React from 'react';

const Video = ({ props }) => {
  return (
    <section className="video-player">
      {props.showHeading && (
        <h2 className="video-player__title">{props.heading}</h2>
      )}
      <div className="video-player__inner">
        <div>
          <iframe
            className="video-player__iframe"
            title={props.heading}
            src={props.youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
// TODO: use overlay before loading iframe

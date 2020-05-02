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
            title="test"
            src={props.youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;

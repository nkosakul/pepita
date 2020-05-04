import React from 'react';
import Image from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Textmedia = ({ props }) => (
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
            <iframe
              className="video-player__iframe"
              title="test"
              src={props.youtubeUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default Textmedia;

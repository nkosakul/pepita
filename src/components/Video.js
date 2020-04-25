import React, { useRef, useEffect } from 'react';
import { APILazerLoader } from '../modules/lazer-loader';
import { getPlyr, Video as Plyr } from '../modules/video/create-plyr';

const createPlayer = async (api, container) => {
  const pl = new Plyr(api, container, {});
  const player = await pl.create();
  return player;
};

const observe = (targets) => {
  new APILazerLoader({
    targets,
    config: {
      rootMargin: '50px 0px',
      threshold: 0.01,
    },
    cb: (api, { target }) => createPlayer(api, target),
    loadAPI: () => getPlyr(),
  }).init();
};

const Video = ({ props }) => {
  const videoEl = useRef(null);

  useEffect(() => {
    if (videoEl && videoEl.current) observe([videoEl.current]);
  }, []);

  return (
    <div className="video-player">
      <div className="video-player__inner">
        <div>
          <div
            ref={videoEl}
            data-plyr-provider="youtube"
            data-plyr-embed-id={props.youtubeUrl}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Video;

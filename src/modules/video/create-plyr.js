const PLYR_DEFAULTS = {
  speed: { selected: 1, options: [] },
};

export class Video {
  constructor(api, target, options = {}) {
    this.Api = api;
    this.target = target;
    this.options = { ...PLYR_DEFAULTS, options };
    this.player = null;
  }

  create = () => {
    this.player = new this.Api(this.target, this.options);
    return this.player;
  };
}

export const getPlyr = async () => {
  const _ = await import(/* webpackChunkName: 'plyr' */ 'plyr');
  return _.default;
};

// make sure to add polyfill for Intersection Observer
// https://www.npmjs.com/package/intersection-observer
import 'intersection-observer';

const DEFAULT_CONFIG = {
  rootMargin: '0px',
  threshold: 0,
};

export class LazerLoader {
  constructor(options) {
    this.targets = options.targets;
    this.once = typeof options.once !== 'undefined' ? options.once : true;
    this.config = Object.assign({}, DEFAULT_CONFIG, options.config);
    this.cb = options.cb;
  }

  isAbove = (entry) => entry.boundingClientRect.y < entry.rootBounds.y;

  onIntersection = (entries) => {
    // Loop through the entries
    entries.forEach((entry) => {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        // Stop watching and do stuff
        this.once && this.observer.unobserve(entry.target);
        this.handleIntersection(entry);
      }
    });
  };

  addTarget = (target) => {
    this.observer.observe(target);
  };

  handleIntersection = (entry) => {
    this.cb(entry, this.isAbove(entry));
  };

  destroy = () => {
    this.targets.forEach((target) => {
      this.observer.unobserve(target);
    });
  };

  init = () => {
    this.observer = new IntersectionObserver(this.onIntersection, this.config);
    this.targets.forEach((target) => {
      this.observer.observe(target);
    });
  };
}

// Lazy Load Pictures //-------------------------------------------------------
export class ImageLazerLoader extends LazerLoader {
  handleIntersection = (entry) => {
    const nodes = [...entry.target.childNodes];

    // Fire callback before setting the source
    // i.e. enables to listen to image onLoad event
    this.cb(entry, this.isAbove(entry));

    nodes.forEach((node) => {
      if (node.nodeName === 'SOURCE') {
        if (node.dataset.srcset) {
          node.setAttribute('srcset', node.dataset.srcset);
          node.removeAttribute('data-srcset');
        }
      }
      if (node.nodeName === 'IMG') {
        if (node.dataset.src) {
          node.setAttribute('src', node.dataset.src);
          node.removeAttribute('data-src');
        }
      }
    });
  };
}

/**
 * Usage
 * HTML
 * <picture data-lazerload>
 *     <source data-srcset="900.jpg" media="(max-width: 900px)">
 *     <img data-src="original.jpg">
 * </picture>
 *
 * JavaScript
 * const targets = document.querySelectorAll('picture[data-lazerload]');
 *
 * const ImageLazer = new ImageLazerLoader({
 *     targets,
 *     config: {
 *         rootMargin: '200px 0px',
 *         threshold: 0.01,
 *     },
 *     cb: entry => console.log('lazerloaded', entry.target),
 * });
 *
 * ImageLazer.init();
 */

// Lazy Load APIs //-----------------------------------------------------------
export class APILazerLoader extends LazerLoader {
  constructor(props) {
    super(props);

    this.loadAPI = props.loadAPI;
    this.queue = [];
    this.api = null;
    this.apiState = 'not loaded';
  }

  handleIntersection = (entry) => {
    if (this.apiState === 'loaded') {
      this.cb(this.api, entry);
    } else if (this.apiState === 'fetching') {
      this.queue.push(entry);
    } else if (this.apiState === 'not loaded') {
      this.apiState = 'fetching';
      this.queue.push(entry);
      this.loadAPI().then((api) => {
        this.api = api;
        this.apiState = 'loaded';
        this.queue.forEach((entry) => {
          this.cb(this.api, entry);
        });
        this.queue.length = 0;
      });
    }
  };
}

/**
 * Usage
 *
 * // loadAPI: Promise Fn, i.e. loadScript(API_URL)
 *
 * const players = document.querySelectorAll('.youtube-player');
 *
 * const YTPlayerLoader = new APILazerLoader({
 *     targets: players,
 *     config: {
 *         rootMargin: '50px 0px',
 *         threshold: 0.01,
 *     },
 *     cb: (api, { target }) => loadYTPlayer(api, target),
 *     loadAPI: () => getSDK(),
 * });
 *
 * YTPlayerLoader.init();
 */

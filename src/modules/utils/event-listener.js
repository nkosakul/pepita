/**
 * Listen for multiple events and do some work debounced by rAF.
 *
 * Usage:
 * const Listener = new EventListener(
 *   // event we want to listen to
 *   'load scroll orientationchange',
 *   // values we are interested in
 *   () => ({
 *     ev: event,
 *     scrollY: window.scrollY,
 *     width: window.innerWidth,
 *   }),
 *   // callback fn has values available
 *   values => {
 *     console.log('got values', { ev, scrollY, width });
 *   },
 * );
 *
 * Listener.listen();
 */
import { addListener, removeListener } from './dom';

export default class EventListener {
  constructor(events, prop, cb) {
    this.events = events;
    this.prop = prop;
    this.cb = cb;
    this.latestKnownValue = 0;
    this.ticking = false;
    this.currentValue = 0;
  }

  listen = () => {
    addListener(window, this.events, this.onEvent, false);
  };

  destroy = () => {
    removeListener(window, this.events, this.onEvent, false);
  };

  update = () => {
    this.ticking = false;
    this.currentValue = !this.prop ? null : this.latestKnownValue;
    return this.cb(this.currentValue);
  };

  requestTick = () => {
    if (!this.ticking) {
      requestAnimationFrame(this.update);
    }
    this.ticking = true;
  };

  onEvent = (event) => {
    if (this.prop) this.latestKnownValue = this.prop(event);
    this.requestTick();
  };
}

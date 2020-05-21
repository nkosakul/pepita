import EventListener from './utils/event-listener';

export default class FromCenter {
  constructor(selector, events, fn) {
    this.selector = selector;
    this.events = events;
    this.fn = fn;
    this.bounds = {};
    this.height = 0;
    this.top = 0;
    this.viewHeight = 0;
    this.toCenter = 0;
    this.tallerThanView = false;
    this.fullViewHeight = false;
    this.listener = new EventListener(this.events, null, this.onEvent);
  }

  onEvent = () => {
    this.bounds = this.selector.getBoundingClientRect();
    this.height = this.bounds.height;
    this.top = this.bounds.top;
    this.viewHeight = window.innerHeight;
    this.toCenter = this.top + this.height / 2 - this.viewHeight / 2;
    this.tallerThanView = this.height > this.viewHeight;
    this.fullViewHeight =
      this.tallerThanView &&
      this.top < 0 &&
      this.top + this.height - this.viewHeight > 0;
    this.update();
  };

  // TODO: combine getPercentage and inViewport
  getPercentage = () => {
    const percentage =
      (100 -
        ((Math.abs(this.toCenter) +
          this.viewHeight / 2 +
          this.height / 2 -
          this.viewHeight) /
          this.height) *
          100) /
      100;
    // negative percentage if center is below viewport center
    const percentageWithSign =
      Math.sign(this.toCenter) === 1 ? -percentage : percentage;
    return percentage < 1 ? percentageWithSign : 1;
  };

  inViewport = () => {
    return Math.abs(this.toCenter) <= this.viewHeight / 2 + this.height / 2;
  };

  update = () => {
    if (this.inViewport()) {
      this.fn({
        offset: this.toCenter,
        percentage: this.getPercentage(),
        position: 'inside',
        tallerThanView: this.tallerThanView,
        fullViewHeight: this.fullViewHeight,
      });
    } else if (this.toCenter > 0) {
      this.fn({
        offset: this.toCenter,
        percentage: 0,
        position: 'below',
        tallerThanView: this.tallerThanView,
        fullViewHeight: this.fullViewHeight,
      });
    } else {
      this.fn({
        offset: this.toCenter,
        percentage: 0,
        position: 'above',
        tallerThanView: this.tallerThanView,
        fullViewHeight: this.fullViewHeight,
      });
    }
  };

  start = () => {
    this.onEvent(); // do all the stuff on init once
    this.listener.listen();
  };
}

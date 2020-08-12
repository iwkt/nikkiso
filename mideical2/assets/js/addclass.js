class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('#navOpen');
    this.DOM.cover = document.querySelector('.mm__cover');
    this.DOM.container = document.querySelector('#container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.container.classList.toggle('active');
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

new MobileMenu();
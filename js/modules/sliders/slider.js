export default class Slider {
    constructor({
        container = null,
        btns = null,
        prev = null,
        next = null,
        activeClass = '',
        autoplay = false,
        animate = false,
    } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.animate = animate;
    }
}
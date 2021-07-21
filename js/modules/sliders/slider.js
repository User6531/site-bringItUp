export default class Slider {
    constructor({
        container = null,
        prev = null,
        next = null,
        activeClass = '',
        autoplay = false,
        animate = false,
    } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e) {}
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next);
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.animate = animate;
    }
}
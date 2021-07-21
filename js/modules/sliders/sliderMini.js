import Slider from './slider';

export default class SliderMini extends Slider {
    constructor(container, next, prev, activeClass, autoplay, animate) {
        super(container, next, prev, activeClass, autoplay, animate);
    }

    changeActiveClass() {
        [...this.slides].forEach(slide => {
            slide.classList.remove(this.activeClass.replace(/\./g, ''));
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass.replace(/\./g, ''));
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        this.container.insertAdjacentElement('beforeend', this.slides[0]);
        this.changeActiveClass();
    }

    prevSlide() {
        this.container.insertAdjacentElement('afterbegin', this.slides[this.slides.length - 1]);
        this.changeActiveClass();
    }
    
    sliderInterval() {
        let interval = setInterval(() => this.nextSlide(), 5000);
        this.next[0].addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        this.prev[0].addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        [...this.slides].forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                clearInterval(interval);
            });
        });
        this.next[0].addEventListener('mouseleave', () => {
            interval = setInterval(() => this.nextSlide(), 5000);
        });
        this.prev[0].addEventListener('mouseleave', () => {
            interval = setInterval(() => this.nextSlide(), 5000);
        });
        [...this.slides].forEach(slide => {
            slide.addEventListener('mouseleave', () => {
                interval = setInterval(() => this.nextSlide(), 5000);
            });
        });
    }

    init() {
        try {
            this.prev[0].addEventListener('click', () => this.nextSlide());
            this.next[0].addEventListener('click', () => this.prevSlide());
            [...this.slides].forEach(slide => {
                slide.querySelectorAll('.card__controls-arrow').forEach(item=>{
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.nextSlide();
                    });
                });
            });

            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
            `;
            this.changeActiveClass();
            
            if(this.autoplay) {
                this.sliderInterval();
            }
        } catch (error) {}
    }
}
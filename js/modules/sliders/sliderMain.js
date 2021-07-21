import Slider from '/src/js/modules/sliders/slider';

export default class SliderMain extends Slider {
    constructor(container, prev, next) {
        super(container, prev, next);
    }
    hideSlides() {
        // [...this.slides] => htmlColection to Array
        [...this.slides].forEach(slide => {
            slide.style.display = 'none';
        });
    }
    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.johnSmith.style.opacity = '0';
            if (n == 2) {
                this.johnSmith.classList.add('animated');
                setTimeout(() => {
                    this.johnSmith.style.opacity = '1';
                    this.johnSmith.classList.add('slideInUp');
                }, 1000);
            } else {
                this.johnSmith.classList.remove('slideInUp');
            }
        } catch (e) {}

        this.hideSlides();
        this.slides[this.slideIndex - 1].style.display = 'block';
    }
    plusSlide(n) {
        this.showSlides(this.slideIndex += n);
    }
    bindTriggers() {
        this.showSlides(this.slideIndex); // init
        this.next.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlide(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlides(this.slideIndex = 1);
            });
        });

        this.prev.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlide(-1);
            });
        });
    }
    render() {
        try {
            try {
                this.johnSmith = document.querySelector('.hanson');
            } catch (e) {}
            this.bindTriggers();
        } catch (e) {}
    }
}
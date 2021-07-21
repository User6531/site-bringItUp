import Slider from '/src/js/modules/sliders/slider';

export default class SliderMain extends Slider {
    constructor(container, btns){
        super(container, btns);
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
    plusSlide() {
        this.showSlides(this.slideIndex += 1);
    }
    render() {
        try {
            this.johnSmith = document.querySelector('.hanson');
        } catch (e) {}

        this.showSlides(this.slideIndex); // init
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlide();
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlides(this.slideIndex = 1);
            });
        });
    }
}
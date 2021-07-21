import SliderMain from '/src/js/modules/sliders/sliderMain';
import SliderMini from './modules/sliders/sliderMini';
import VideoPlayer from '/src/js/modules/videoPlayer';
import Difference from '/src/js/modules/difference';
import Form from '/src/js/modules/form';

window.addEventListener('DOMContentLoaded', () => {

    new SliderMain({
        container: '.page',
        btns: '.next'
    }).render();

    const showUpSlider = new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: '.card-active',
        animate: true,
    }).init();

    const moduleSlider = new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: '.card-active',
        animate: true,
        autoplay: true
    }).init();

    const feedSlider = new SliderMini({
        container: '.feed__slider',
        prev: '.feed .slick-prev',
        next: '.feed .slick-next',
        activeClass: '.feed__item-active',
    }).init();

    new VideoPlayer({
        trigger: '.play__circle',
        popup: '.overlay',
    }).init();

    const differenceOld = new Difference({
        column: '.officerold',
        items: '.officer__card-item',
        trigger: '.plus',
    }).init();

    const differenceNew = new Difference({
        column: '.officernew',
        items: '.officer__card-item',
        trigger: '.plus',
    }).init();

    const formJoin = new Form({
        form: '.join__evolution form',
        path: 'assets/question.php',
    }).init();

    const formSchedule = new Form({
        form: '.schedule__form form',
        path: 'assets/question.php',
    }).init();

});
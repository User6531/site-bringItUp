import SliderMain from '/src/js/modules/sliders/sliderMain';
import SliderMini from './modules/sliders/sliderMini';
import VideoPlayer from '/src/js/modules/videoPlayer';
import Difference from '/src/js/modules/difference';
import Form from '/src/js/modules/form';
import Accordion from '/src/js/modules/accordion';
import Download from '/src/js/modules/download';

window.addEventListener('DOMContentLoaded', () => {

    const mainSliderPageOne = new SliderMain({
        container: '.page',
        next: '.next',
    }).render();
    const mainSliderPageTwo = new SliderMain({
        container: '.moduleapp',
        next: '.next',
        prev: '.prev',
    }).render();

    const showUpSliderPageOne  = new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: '.card-active',
        animate: true,
    }).init();
    const moduleSliderPageOne  = new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: '.card-active',
        animate: true,
        autoplay: true
    }).init();
    const feedSliderPageOne  = new SliderMini({
        container: '.feed__slider',
        prev: '.feed .slick-prev',
        next: '.feed .slick-next',
        activeClass: '.feed__item-active',
    }).init();

    const mainPageOne = new VideoPlayer({
        trigger: '.showup__video .play',
        popup: '.overlay',
    }).init();
    const mainPageTwo = new VideoPlayer({
        trigger: '.module__video-item .play',
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

    new Accordion({
        triggers: '.module__info-show .plus',
        blocks: '.msg',
    }).init();
    
    new Download({
        triggers: '.download',
        path: 'assets/img/Bitmap.jpg',
    }).init();

});
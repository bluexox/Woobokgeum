$(document).ready(function () {

    const interiorSwiper = new Swiper('.interior-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    const resSwiper = new Swiper('.res-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });


});
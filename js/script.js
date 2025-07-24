$(document).ready(function () {

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("inquiryForm");
        const submitBtn = document.querySelector(".inquiry-btn button");

        submitBtn.addEventListener("click", function (e) {
            const name = form.querySelector("input[name='name']").value.trim();
            const phone = form.querySelector("input[name='phone']").value.trim();
            const area = form.querySelector("input[name='area']").value.trim();
            const message = form.querySelector("textarea[name='message']").value.trim();

            if (!name || !phone || !area || !message) {
                alert("모든 항목을 입력해 주세요.");
                e.preventDefault(); // 폼 전송 방지
            }
        });
    });

    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    const interiorSwiper = new Swiper('.interior-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    // 자동 스크롤 기능 추가
    let autoScroll = setInterval(() => {
        // swiper가 끝까지 갔다면 처음으로 리셋
        if (interiorSwiper.isEnd) {
            interiorSwiper.slideTo(0, 600); // 0으로 돌아가기 (800ms 애니메이션)
        } else {
            interiorSwiper.slideNext(600); // 다음 슬라이드로 이동 (800ms 애니메이션)
        }
    }, 2000);

    const resSwiper = new Swiper('.res-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

});

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

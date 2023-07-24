'use strict'
const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let showButton = document.querySelector('.brand-static__show-button');
let brandList = document.querySelector('.brand-static__wrapper');

showButton.addEventListener('click', function () {
    brandList.classList.toggle('brand-static__wrapper--full');
    showButton.classList.toggle('brand-static__show-button--showed');
    if (showButton.textContent === "Показать все") {
        showButton.textContent = "Скрыть";
    } else {
        showButton.textContent = "Показать все";
    }
});
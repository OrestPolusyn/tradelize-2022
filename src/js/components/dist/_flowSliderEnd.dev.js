"use strict";

var endSlider = new Swiper('.flow-end', {
  slidesPerView: 1,
  spaceBetween: 200,
  centeredSlides: true,
  direction: 'horizontal',
  mousewheel: true,
  navigation: {
    nextEl: ".flow-end-next",
    prevEl: ".flow-end-back"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  keyboard: true,
  on: {
    reachEnd: function reachEnd() {
      if (endSlider.isEnd) {
        document.querySelector('.flow-end-skip').classList.add('flow-end-skip-hidden');
      }
    },
    slideChange: function slideChange() {
      if (!endSlider.isEnd) {
        document.querySelector('.flow-end-skip').classList.remove('flow-end-skip-hidden');
      }
    }
  }
});
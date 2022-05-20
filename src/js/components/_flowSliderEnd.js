const endSlider = new Swiper('.flow-end', {
  slidesPerView: 1,
  spaceBetween: 200,
  centeredSlides: true,
  direction: 'horizontal',
  mousewheel: true,
  navigation: {
    nextEl: ".flow-end-next",
    prevEl: ".flow-end-back",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
  on: {
    reachEnd: function () {
      if (endSlider.isEnd) {
        document.querySelector('.flow-end-skip').classList.add('flow-end-skip-hidden');
      }
    },
    slideChange: function () {
      if (!endSlider.isEnd) {
        document.querySelector('.flow-end-skip').classList.remove('flow-end-skip-hidden');
      }
    }
  }
});

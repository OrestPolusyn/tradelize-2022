const galleryTop = new Swiper(document.querySelector('.flow-slider-contents'), {
  slidesPerView: 1,
  spaceBetween: 30,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.flow-slider-next',
    prevEl: '.flow-slider-prev',
  }
})

const galleryThumbs = new Swiper(document.querySelector('.flow-slider'), {
  slideToClickedSlide: true,
  spaceBetween: 15,
  centeredSlides: false,
  breakpoints: {
    992: {
      direction: 'vertical',
      loop: false,
    }
  }
})

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

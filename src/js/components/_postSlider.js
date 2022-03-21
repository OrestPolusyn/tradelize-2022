import Swiper, {
  Navigation,
  Pagination
} from 'swiper'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.post-slider', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

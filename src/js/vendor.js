import './vendor/focus-visible.js';
import $ from 'jquery';
import ApexCharts from 'apexcharts';
import validate from 'jquery-validation'
import 'jquery-validation/dist/additional-methods'
import {
  createPopper
} from '@popperjs/core';
import Croppie from 'croppie';
import toastr from 'toastr'
import AirDatepicker from 'air-datepicker'
import localeEn from 'air-datepicker/locale/en';
import Swiper, {
  Navigation,
  Pagination,
  Controller
} from 'swiper';
import moment from 'moment';

Swiper.use([Navigation, Pagination, Controller])


window.jQuery = $;
window.$ = $;
window.ApexCharts = ApexCharts;
window.createPopper = createPopper;
window.Croppie = Croppie;
window.validate = validate;
window.toastr = toastr;
window.AirDatepicker = AirDatepicker;
window.localeEn = localeEn;
window.Swiper = Swiper;
window.moment = moment;

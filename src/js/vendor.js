import './vendor/focus-visible.js';
import $ from 'jquery';
import ApexCharts from 'apexcharts';
import {
  createPopper
} from '@popperjs/core';
import Croppie from 'croppie';

window.jQuery = $;
window.$ = $;
window.ApexCharts = ApexCharts;
window.createPopper = createPopper;
window.Croppie = Croppie;

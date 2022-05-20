"use strict";

if (document.querySelector('.notifications-settings')) {
  document.querySelector('.notifications-settings').addEventListener('click', function () {
    console.log();

    if (window.innerWidth >= 993) {
      document.querySelector('.notifications').classList.toggle('notifications-show');
    }
  });
}
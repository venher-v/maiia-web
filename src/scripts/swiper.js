'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css';

let swiper = null;

const initSWiper = () => {
  swiper = new Swiper('.swiper', {
    initialSlide: 0,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    speed: 600,
    slidesPerView: 1.1,
    spaceBetween: 14,

    mousewheel: true,

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },

    on: {
      slideChange: function () {
        const pagination = document.querySelector('.swiper-pagination');
        if (pagination) {
          pagination.style.width = '';
        }
      },
    },

    breakpoints: {
      744: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },

      1280: {
        slidesPerView: 3.2,
        spaceBetween: 40,
      },
    },
  });
};

initSWiper();

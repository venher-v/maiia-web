"use strict";

  const navList = document.querySelector('.menu__nav-list');
  const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  if (scroll > 720) {

    if (!navList.classList.contains('menu__nav-list--desktop')) {
      navList.classList.add('menu__nav-list--desktop');
      menu.classList.add('menu--desktop');
    }
  } else {
    if (navList.classList.contains('menu__nav-list--desktop')) {
      navList.classList.remove('menu__nav-list--desktop');
      menu.classList.remove('menu--desktop');
    }
  }
})
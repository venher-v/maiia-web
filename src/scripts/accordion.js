'use strict';

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
  const button = e.target.closest('.accordion__button');

  if (!button) {
    return;
  }

  const item = button.closest('.accordion__item');
  const isActive = item.classList.contains('is-active');

  accordion.querySelectorAll('.accordion__item').forEach((el) => {
    el.classList.remove('is-active');
  });

  if (!isActive) {
    item.classList.add('is-active');
  }
});

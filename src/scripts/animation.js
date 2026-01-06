import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();
const mq = window.matchMedia('(min-width: 1280px)');

function desktopAnimations() {
  if (!mq.matches) {
    return;
  }

  sr.clean('.js-reveal-desktop');

  sr.reveal('.js-reveal-desktop', {
    origin: 'bottom',
    distance: '90%',
    viewFactor: 0.3,
    duration: 800,
    easing: 'ease-out',
  });
}

sr.reveal('.js-reveal-left', {
  origin: 'left',
  distance: '90%',
  viewFactor: 0.3,
  duration: 800,
  easing: 'ease-out',
});

sr.reveal('.js-reveal-right', {
  origin: 'right',
  distance: '90%',
  viewFactor: 0.3,
  duration: 800,
  easing: 'ease-out',
});

sr.reveal('.js-reveal-bottom', {
  origin: 'bottom',
  distance: '90%',
  viewFactor: 0.3,
  duration: 800,
  easing: 'ease-out',
});

sr.reveal('.js-reveal-rules', {
  origin: 'right',
  distance: '90%',
  viewFactor: 0.3,
  duration: 800,
  easing: 'ease-out',
});

desktopAnimations();
mq.addEventListener('change', desktopAnimations);

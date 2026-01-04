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
    distance: '50%',
    delay: 500,
    duration: 800,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  });
}

sr.reveal('.js-reveal-left', {
  origin: 'left',
  distance: '50%',
  delay: 500,
  duration: 800,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
});

sr.reveal('.js-reveal-right', {
  origin: 'right',
  distance: '50%',
  delay: 500,
  duration: 800,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
});

sr.reveal('.js-reveal-bottom', {
  origin: 'bottom',
  distance: '50%',
  delay: 500,
  duration: 800,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
});

sr.reveal('.js-reveal-rules', {
  origin: 'right',
  distance: '50%',
  delay: 500,
  duration: 800,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
});

desktopAnimations();
mq.addEventListener('change', desktopAnimations);

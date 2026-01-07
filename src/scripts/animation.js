import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal();
const mq = window.matchMedia('(min-width: 1280px)');
const animationOptions = {
  distance: '90%',
  viewFactor: 0.25,
  duration: 800,
  easing: 'ease-out',
};
const desctopAnimations = {
  distance: '90%',
  viewFactor: 0.25,
  duration: 800,
  easing: 'ease-out',
};

function desktopAnimations() {
  if (!mq.matches) {
    return;
  }

  sr.clean('.js-reveal-desktop');

  sr.reveal('.js-reveal-desktop', {
    ...desctopAnimations,
    origin: 'bottom',
  });
}

sr.reveal('.js-reveal-left', {
  ...animationOptions,
  origin: 'left',
    // opacity: 0.5

});

sr.reveal('.js-reveal-right', {
  ...animationOptions,
  origin: 'right',
});

sr.reveal('.js-reveal-bottom', {
  ...animationOptions,
  origin: 'bottom',
});

sr.reveal('.js-reveal-rules', {
  ...animationOptions,
  origin: 'right',
});

desktopAnimations();
mq.addEventListener('change', desktopAnimations);

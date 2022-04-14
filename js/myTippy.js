// tippy


tippy('.js-tooltip', {
  theme: 'projects-tooltip',

  animation: 'fade',
  // followCursor: true,
  delay: 300,

  placement: "top",
  allowHTML: !0,
  role: "tooltip",
  trigger: "mouseenter focus click",
  hideOnClick: !0,

  // trigger: 'click',
  // trigger: 'focus',
  maxWidth: 250
});

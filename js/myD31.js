const d31Swiper = new Swiper('.d31__swiper', {
  slidesPerGroup: 1,
  slidesPerView: "auto",
  speed: 900,
  // setWrapperSize: false,
  // width: null,
  grid: {
    rows: 1,
    fill: "row"
  },
  // spaceBetween: 32,
  // Optional parameters

  // Navigation arrows
  navigation: {
    nextEl: '.d31__swiper-button-next',
    prevEl: '.d31__swiper-button-prev',
  },
});
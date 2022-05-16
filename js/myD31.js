const topSwiper = new Swiper('.sofa-sample__top-swiper', {
  // Optional parameters
  // loop: true,
  slidesPerGroup: 1,
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: true,
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  // breakpoints: {
  //   1011: {
  //     direction: 'horizontal',
  //   },

  //   740: {
  //     direction: 'vertical',
  //   },

  //   320: {
  //     direction: 'horizontal',
  //   }
  // }
});



const bottomSwiper = new Swiper('.sofa-sample__bottom-swiper', {
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
    nextEl: '.sofa-sample__swiper-button-next',
    prevEl: '.sofa-sample__swiper-button-prev',
  },
});


const modalSwiper = new Swiper('.modal-swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerGroup: 1,
  slidesPerView: "auto",
  lazy: {
    loadPrevNext: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


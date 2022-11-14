var swiper = new Swiper(".small-swiper", {
  spaceBetween: 38,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      // slidesPerGroup: 1,
      direction: "horizontal",
      slidesPerView: 'auto',
    },
    720: {
      // slidesPerGroup: 2,
      direction: "vertical",
      // slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1010: {
      // slidesPerGroup: 3,
      direction: "horizontal",
      slidesPerView: 'auto',
    }
  },
});
var swiper2 = new Swiper(".big-swiper", {
  spaceBetween: 10,
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
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

var swiper = new Swiper(".modal-d31-swiper-small", {
  spaceBetween: 55,
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-modal-button-next",
    prevEl: ".swiper-modal-button-prev",
  },
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      spaceBetween: 63,
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    500: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    // 900: {
    //   // slidesPerGroup: 5,

    //   slidesPerView: 3,
    // },
    1024: {
      spaceBetween: 70,
      slidesPerView: 3,
    }

  },

});
var swiper2 = new Swiper(".modal-d31-swiper-big", {
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});
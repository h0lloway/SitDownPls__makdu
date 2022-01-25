// swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper // swiper 

const HeroSwiper = new Swiper('.hero__swiper', {
  autoplay: {
    delay: 4000,
  },
  speed: 1300,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero__swiper-pagination',
  },
});


const SpecialSwiper = new Swiper('.special-price__swiper', {
  slidesPerGroup: 3,
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
    nextEl: '.special-price__swiper-button-next',
    prevEl: '.special-price__swiper-button-prev',
  },
});



const UsefulSwiper = new Swiper('.useful__swiper', {
  // slidesPerGroup: 2,
  slidesPerView: "auto",
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  grid: {
    rows: 1,
    fill: "row"
  },

  // Navigation arrows
  navigation: {
    nextEl: '.useful__swiper-button-next',
    prevEl: '.useful__swiper-button-prev',
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }

});





// more-button // more-button // more-button // more-button // more-button // more-button 

let OpenBtn = document.querySelector(".more-item-btn");
let CloseBtn = document.querySelector(".close-item-btn");
let hideitems = document.querySelectorAll(".hide");

OpenBtn.addEventListener("click", function () {
  hideitems.forEach(item => {
    item.style.display = "block";
  });

  this.style.display = "none";
  CloseBtn.style.display = "block";

  CloseBtn.addEventListener("click", function () {
    hideitems.forEach(item => {
      item.style.display = "none";
    });

    this.style.display = "none";
    OpenBtn.style.display = "block";
  });
});


// choices // choices // choices // choices // choices // choices // choices // choices // choices 


const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,

    });
  });
}

multiDefault();


// var e = document.querySelector(".region-select"),
//   c = (new Choices(e, {
//     searchEnabled: !1
//   }), document.querySelector(".category-select"));
// new Choices(c, {
//   searchEnabled: !1,
//   classNames: {
//     containerOuter: "choices-2"
//   }
// });
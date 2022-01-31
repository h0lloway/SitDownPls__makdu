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
  // grid: {
  //   rows: 1,
  //   fill: "row"
  // },

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

// just validate

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  colorWrong: '#FF6972',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Недопустимый формат',
    },
    tel: {
      required: 'Недопустимый формат',
    },
    mail: {
      required: 'Недопустимый формат',
    },
  },

  submitHandler: function (form) {
    let formData = new FormData(form);

    fetch('mail.php', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Отправлено');
      form.reset();
    })
      .catch(() => console.log('Ошибка'))
  }
});



// табы





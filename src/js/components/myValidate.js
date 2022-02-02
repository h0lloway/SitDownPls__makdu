var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.modal-form', {
  colorWrong: '#FF6972',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
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
      required: 'Введите ваше имя',
    },
    tel: {
      required: 'Введите ваш телефон',
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
"use strict";
var e = gsap.timeline({
    paused: !0
});
e.to(".hidden", {
    duration: .3,
    opacity: 1,
    visibility: "visible",
    display: "block"
}), document.querySelector(".button-active").addEventListener("click", (function () {
    document.querySelector(".button-close").classList.add("vis"), document.querySelector(".button-active").classList.add("hid"), e.timeScale(1).play()
})), document.querySelector(".button-close").addEventListener("click", (function () {
    document.querySelector(".button-active").classList.remove("hid"), document.querySelector(".button-close").classList.remove("vis"), e.timeScale(2).reverse()
})),

new Swiper(".hero__swiper", {
        loop: !0,
        lazy: {
            loadPrevNext: !0
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            renderBullet: function (e, t) {
                return '<span class="' + t + '"><svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24"><circle class="path" cx="4" cy="12" r="10" transform="rotate(-90 8 8)"stroke-width="2.5px" stroke="#ff862f" fill="transparent"></circle></svg></span>'
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".special-order__swiper", {
        slidesPerGroup: 3,
        slidesPerView: "auto",
        breakpoints: {
            210: {
                slidesPerGroup: 1
            },
            737: {
                slidesPerGroup: 2
            },
            976: {
                slidesPerGroup: 3
            }
        },
        lazy: {
            loadPrevNext: !0
        },
        navigation: {
            nextEl: ".special-order-button-next",
            prevEl: ".special-order-button-prev"
        }
    }), 
    
    new Swiper(".useful__swiper", {
        slidesPerGroup: 1,
        slidesPerView: "auto",
        lazy: {
            loadPrevNext: !0
        },
        navigation: {
            nextEl: ".useful-button-next",
            prevEl: ".useful-button-prev"
        }
    }), 
    
    tippy(".main-form__toolp", {
        placement: "top",
        allowHTML: !0,
        role: "tooltip",
        trigger: "mouseenter focus click",
        hideOnClick: !0,
        theme: "colorToolp"
    }), 
    
    new JustValidate(".main-form__form", {
        colorWrong: "#D11616",
        rules: {
            name: {
                required: !0,
                minLength: 2,
                strength: {
                    custom: "[а-яА-Яd]"
                }
            },
            tel: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            }
        },
        messages: {
            name: {
                required: "Введите ваше имя",
                minLength: "Минимальное количество букв - 2",
                strength: "Недопустимый формат"
            },
            email: "Недопустимый формат",
            tel: "Введите ваш телефон"
        },
        submitHandler: function (e, t, r) {
            var i = new FormData(e),
                o = new XMLHttpRequest;
            o.onreadystatechange = function () {
                4 === o.readyState && 200 === o.status && console.log("Отправлено")
            }, o.open("POST", "./resources/mail.php", !0), o.send(i), e.reset()
        }
    });
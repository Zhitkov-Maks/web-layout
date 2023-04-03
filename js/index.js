let podcasts = document.querySelectorAll('.podcasts__item');
let btn = document.querySelector('.podcasts__button');

btn.addEventListener('click',
function() {
  podcasts.forEach(function(el) {
    el.classList.toggle('podcasts__item__visible')
  });
  btn.classList.toggle('podcasts__button__hidden');
  btn.classList.toggle('podcasts__button-2')
})


document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices");

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
     },
  });
});

$( function() {
  $( ".quests__accordion" ).accordion({
     icons: false,
     heightStyle: "content",
     collapsible: true,
     active: false
   });

 } );


 let iconPhoto = document.querySelector('.quests__photo');
let check = document.querySelectorAll('.quests__accordion__list-top');
for (let i = 0; i < check.length; ++i) {
  check[i].addEventListener('click', function(el){
    if (document.querySelector('.quests-add-padding')) {
      let questsPadding = document.querySelector('.quests');
      document.querySelector('.quests__accordion-info--active').classList.remove('quests__accordion-info--active')
      questsPadding.classList.remove('quests-add-padding');
      iconPhoto.classList.remove('quests__photo__hide');
    }
    else if (document.querySelector('.quests__accordion-info--active')){
      document.querySelector('.quests__accordion-info--active').classList.remove('quests__accordion-info--active');
    }
  });
}


elm = document.querySelectorAll('.quests__accordion__button');
for (let i = 0; i < elm.length; ++i) {
  elm[i].addEventListener('click', function(el){
    next = el.target.nextElementSibling;
    if (next){
      document.querySelectorAll('.quests__accordion-info').forEach(function(btn){
        btn.classList.remove('quests__accordion-info--active')});
      next.classList.add('quests__accordion-info--active');
      iconPhoto.classList.add('quests__photo__hide');
      if (screen.width <= 4000) {
        let quests = document.querySelector('.quests');
        quests.classList.add('quests-add-padding');
      }
    }
  });
}


new window.JustValidate('.about__form', {
  colorWrong: '#FFFFFF',
  rules: {
    checkbox: {
    required: true,
    },
  text: {
    required: !0,
    minLength: 5,
    maxLength: 300,
  },
    name: {
      required: !0,
      minLength: 3,
      function: (value, name) => {
        re = /^[a-zA-ZА-Яа-я0-9_-\s+]{3,16}$/
        let result = re.test(name)
        if (result) {
          return result;
        }
      }
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
        checkbox: {
          required: "Необходимо ваше согласие на обработку данных"
        },
        text: {
          required: "Ошибка",
          minLength: "Введено менее 5 символов",
          maxLength: "Введено более 5 символов"
        },
        email: {
          required: "Ошибка",
          email: "Не введено нужного символа"
        },
        name: {
          function: "Недопустимые символы!",
          required: "Ошибка",
          minLength: "Введено менее 3 символов",
          pattern: "Введен недопустимый символ",
      }
   }
});


let burger = document.querySelector('.header__menu');
let nav = document.querySelector('.header__block-navMenu');
let bottomList = document.querySelector(".header__bottom__tabletMenu");
burger.addEventListener('click', burgerOpen, false);
function burgerOpen(e) {
  burger.classList.toggle('menu');
  nav.classList.toggle('active');
  bottomList.classList.toggle('active-2');
}

let menu_links = document.querySelectorAll(".header__top__link");
menu_links.forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelector(".header__block-navMenu").classList.remove("active");
    document.querySelector('.header__bottom__tabletMenu').classList.toggle('active-2');
    burger.classList.remove('menu');
  })
})

let playTablet = document.querySelector('.header__bottom__play');
playTablet.addEventListener('click', playOpenOne, false);
function playOpenOne(e) {
  playTablet.classList.toggle('play-active');
}


let mobileBtn = document.querySelector('.header__mobile__btn');
let headerBottomPlay = document.querySelector('.header__bottom__block');
let headerBottom = document.querySelector('.header-content')
let headerTransform = document.querySelector('.header__mobile')
mobileBtn.addEventListener('click', playOpen, false);
function playOpen(e) {
  headerBottomPlay.classList.toggle('play--active');
  headerBottom.classList.toggle('play--color')
  headerTransform.classList.toggle('header--transform')
}


const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
  const blockID = anchor.getAttribute('href').substr(1)
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
    })
  })
}

document.querySelector(".header__top__btn-searth").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".header__top__buttons")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__top__btn-searth").classList.remove("active")
  }
})

let playPodcasts = document.querySelectorAll('.podcasts__btn-play');
for (let i = 0; i < playPodcasts.length; ++i) {
  playPodcasts[i].addEventListener('click', function(){
    if (playPodcasts[i].className.includes('podcasts__btn-play') && playPodcasts[i].className.includes('podcasts-play-active')) {
      playPodcasts[i].classList.toggle('podcasts-play-active');
    }
    else if (playPodcasts[i].className.includes('podcasts__btn-play')){
      document.querySelectorAll('.podcasts__btn-play').forEach(function(btn) {
        btn.classList.remove('podcasts-play-active');
      })
      playPodcasts[i].classList.add('podcasts-play-active');
    }
  });
}


let headerBtn = document.querySelectorAll('.header__block__btn');
for (let i = 0; i < headerBtn.length; ++i) {
  headerBtn[i].addEventListener('click', function(){
    if (headerBtn[i].className.includes('header__block__btn') && headerBtn[i].className.includes('header-play-active')) {
      headerBtn[i].classList.toggle('header-play-active');
    }
    else if (headerBtn[i].className.includes('header__block__btn')){
      document.querySelectorAll('.header__block__btn').forEach(function(btn) {
        btn.classList.remove('header-play-active');
      })
      headerBtn[i].classList.add('header-play-active');
    }
  });
}

const container = document.querySelector(".about__container");
const swiper = new Swiper('.about__list', {
  speed: 300,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  breakpoints: {
    320: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1367: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
})

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
  const selector = document.querySelector(".choices")

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


 let theParent = document.querySelector('.quests__accordion');
 theParent.addEventListener('click', function(e) {
    let next = e.target.nextElementSibling;
    let quests = document.querySelector('.quests');
    if (next) {
      if (next.className == 'quests__accordion-info') {
        document.querySelectorAll('.quests__accordion-info').forEach(function(btn){
          btn.classList.remove('quests__accordion-info--active')
        });
        next.classList.add('quests__accordion-info--active');
        if (screen.width <= 992) {
          quests.classList.add('quests-add-padding')
        };
      };
    };
 });


let check = document.querySelector('.quests__accordion');
check.addEventListener('click', function(e) {
  if (e.target.className.includes('quests__accordion__list-top') || e.target.className.includes('quests__accordion__title')) {
    if (document.querySelector('.quests-add-padding')) {
      let questsPadding = document.querySelector('.quests');
      document.querySelector('.quests__accordion-info--active').classList.remove('quests__accordion-info--active')
      questsPadding.classList.remove('quests-add-padding');
    }
    else if (document.querySelector('.quests__accordion-info--active')){
      document.querySelector('.quests__accordion-info--active').classList.remove('quests__accordion-info--active')
    }
  }
});


new window.JustValidate('.about__form', {
    colorWrong: '#FFFFFF',
    rules: {
      checkbox: {
      required: true,
      },
    text: {
      required: !0,
      minLength: 5,
      maxLength: 300
    },
      name: {
        required: true,
        minLength: 3,
      },
      email: {
        required: true,
        email: true
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
          required: "Ошибка",
          minLength: "Введено менее 3 символов"
        }
      }
    });


let burger = document.querySelector('.header__menu');
let nav = document.querySelector('.wrapper-nav');
let bottomList = document.querySelector(".wrapper-bottom");
burger.addEventListener('click', burgerOpen, false);
function burgerOpen(e) {
  burger.classList.toggle('menu');
  nav.classList.toggle('active');
  bottomList.classList.toggle('active-2');
}

let menu_links = document.querySelectorAll(".header__top__link");
menu_links.forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelector(".wrapper-nav").classList.remove("active");
    document.querySelector('.wrapper-bottom').classList.toggle('active-2');
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
let headerBottom = document.querySelector('.header-bottom')
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


let playPodcasts = document.querySelector('.podcasts__list');
playPodcasts.addEventListener('click', playOpenTwo, false);
function playOpenTwo(e) {
  if (e.target.className.includes('podcasts__btn-play') && e.target.className.includes('podcasts-play-active')) {
    e.target.classList.toggle('podcasts-play-active');
  }
  else if (e.target.className.includes('podcasts__btn-play')) {
    document.querySelectorAll('.podcasts__btn-play').forEach(function(btnTwo){
      btnTwo.classList.remove('podcasts-play-active');
    })
    e.target.classList.add('podcasts-play-active');
  }
}

let headerBtn = document.querySelector('.header__bottom__block');
headerBtn.addEventListener('click', headerPlay, false);
function headerPlay(e){
  if (e.target.className.includes('header-play-active') && e.target.className.includes('header-play-active')) {
    e.target.classList.toggle('header-play-active');
  }

  else if (e.target.className.includes('header__bottom__btn')) {
    document.querySelectorAll('.header__bottom__btn').forEach(function(btnTwo){
      btnTwo.classList.remove('header-play-active');

    })
    e.target.classList.add('header-play-active');
    e.target.style
  }
}

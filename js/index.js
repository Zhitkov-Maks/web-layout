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
 theParent.addEventListener('click', doPhoto, false);

 function doPhoto(e) {
  let next = e.target.nextElementSibling;
  let quests = document.querySelector('.quests');
  if (next) {
    if (next.className == 'quests__accordion-info') {
      document.querySelectorAll('.quests__accordion-info').forEach(function(btn){
        btn.classList.remove('quests__accordion-info--active')
      });
      next.classList.add('quests__accordion-info--active');
      if (screen.width <= 768 && quests.style.paddingBottom != '350px') {
        quests.classList.add('quests-padding')
      };
    };
  };
 }

 let quests = document.querySelector('.quests__accordion__title');
 quests.addEventListener('click', doPadding, false);
 function doPadding(e) {
  let quests = document.querySelector('.quests-padding');
  console.log(quests)
  if (quests) {
    quests.classList.remove('quests-padding')
  }
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

let podcasts = document.querySelectorAll('.podcasts__item');
let btn = document.querySelector('.podcasts__button');

btn.addEventListener('click',
function() {
  podcasts.forEach(function(el) {
    el.classList.add('podcasts__item__visible')
  });
  btn.classList.add('podcasts__button__hidden');
})


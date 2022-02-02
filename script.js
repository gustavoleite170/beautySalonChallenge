/* Open or close the menu options */

const showMenu = document.querySelector('body header nav#menu')
const onOff = document.querySelectorAll('.on-off') // to open or close, by open/close button

for (let element of onOff) {
  element.addEventListener('click', () => showMenu.classList.toggle('show'))
}

const menuSelected = document.querySelectorAll('nav ul li a') // to close menu when an option has been selected

for (let element of menuSelected) {
  element.addEventListener('click', () => showMenu.classList.remove('show'))
}

/* SWIPER for slides n testimonials */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  breakpoints: {
    // when window width is >= 660px
    660: {
      slidesPerView: 2
    }
  }
})

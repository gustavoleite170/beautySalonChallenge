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

/* Back to top button behavior */
const buttonBack = document.querySelector('.back-to-top')

window.addEventListener('scroll', () => {
  window.scrollY >= 900
    ? buttonBack.classList.add('show')
    : buttonBack.classList.remove('show')
})

/* SWIPER for slides n testimonials */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 32,
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

/* Scroll reveal to make smooth animation on page */

const scroll = ScrollReveal({
  origin: 'bottom',
  distance: '2rem',
  duration: 550,
  reset: true
})

scroll.reveal(
  `#home section.image, #home section.margins, #about section.image, #about section.margins, #services section.flex-1rem, #services section.flex, #testimonials h2, #testimonials .swiper, #contact > div > section, #contact > div > div`,
  { interval: 0 }
)

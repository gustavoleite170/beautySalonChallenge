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

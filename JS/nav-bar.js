var nav = document.querySelector('nav');
var button = document.querySelector('.hamburger-menu')
button.addEventListener('click', (event) => {
    nav.classList.toggle('open')
})
var madeBy = document.querySelector('.logo');
madeBy.addEventListener('click', (event) => {
    console.log('Hecho por FERNANDO YARIB VELÁZQUEZ DÍAZ')
    console.log('fyvd55@hotmail.com')
})
const menu = document.querySelector('.menu-links')
const icon = document.querySelector('.hamburger-icon')

function toggleMenu(){
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}
console.log(menu)
console.log(icon)
icon.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);


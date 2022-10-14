const menu = document.querySelector('.menu')
const btnMenu = document.querySelector('.btn-menu')
const header = document.querySelector('#header')

function OpenMenu(){
    menu.classList.toggle("active")
    header.classList.toggle("active")
}

btnMenu.addEventListener('click' , OpenMenu)
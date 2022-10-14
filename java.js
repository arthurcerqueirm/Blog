const menu = document.querySelector('.menu')
const btnMenu = document.querySelector('.btn-menu')
const header = document.querySelector('#header')

function OpenMenu(){
    menu.classList.toggle("active")
    window.setTimeout( header.classList.toggle("active"), 600)
}

btnMenu.addEventListener('click' , OpenMenu)
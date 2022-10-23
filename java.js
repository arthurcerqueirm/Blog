const menu = document.querySelector('.menu')
const btnMenu = document.querySelector('.btn-menu')
const header = document.querySelector('#header')
var clicar = document.querySelector('.nao')

function OpenMenu(){
    console.log(clicar)
    menu.classList.toggle("active")
    window.setTimeout( header.classList.toggle("active"), 600)
}

function FecharMenu(){
    menu.classList.toggle("active")
}


btnMenu.addEventListener('click' , OpenMenu)
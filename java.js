const menu = document.querySelector('.menu')
const btnMenu = document.querySelector('.btn-menu')
const div = document.querySelector('.div')

function OpenMenu(){
    menu.classList.toggle("active")
    console.log(btnMenu)
}

btnMenu.addEventListener('click' , OpenMenu)
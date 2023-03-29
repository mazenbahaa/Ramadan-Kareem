let Theme = document.querySelector('.Theme')
let MenuToggle = document.querySelector('.MenuToggle')
let body = document.querySelector('body')
let Navigation = document.querySelector('.Navigation')

Theme.onclick = function(){
    body.classList.toggle('dark')
    Theme.classList.toggle('active')
}

MenuToggle.onclick = function(){
    MenuToggle.classList.toggle('active')
    Navigation.classList.toggle('active')
}
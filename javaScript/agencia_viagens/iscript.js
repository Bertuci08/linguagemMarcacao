// menu humburguer
const botaoHumburguer = document.querySelector('#btn-humburguer')
const menuMobile = document.querySelector('#menu-mobile')

botaoHumburguer.addEventListener("click", () =>{
    menuMobile.classList.toggle("hidden")
})

const menuEmail = document.querySelector(".navbar-email")
const arrowEmail =document.querySelector(".email-arrow")
const desktopMenu = document.querySelector(".desktop-menu")


const menuIcono = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const carImg = document.querySelector(".car-img")
const myOrder = document.querySelector(".my-order")

menuEmail.addEventListener("click", showDesktopMenu )
arrowEmail.addEventListener("click", showDesktopMenu )
menuIcono.addEventListener("click", showMenuMobile)
carImg.addEventListener("click", showOrderCar)


function showDesktopMenu(){

    desktopMenu.classList.toggle("inactive")
}
function showMenuMobile(){
    mobileMenu.classList.toggle("inactive")
}
function showOrderCar(){
    myOrder.classList.toggle("inactive")
}
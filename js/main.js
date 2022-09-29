
const menuEmail = document.querySelector(".navbar-email")
const arrowEmail =document.querySelector(".email-arrow")
const desktopMenu = document.querySelector(".desktop-menu")


const menuIcono = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", showDesktopMenu )
arrowEmail.addEventListener("click", showDesktopMenu )
menuIcono.addEventListener("click", showMenuMobile)

function showDesktopMenu(){

    desktopMenu.classList.toggle("inactive")
}
function showMenuMobile(){
    mobileMenu.classList.toggle("inactive")

}
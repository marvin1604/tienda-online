
const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const arrowEmail =document.querySelector(".email-arrow")

menuEmail.addEventListener("click", showDesktopMenu )
arrowEmail.addEventListener("click", showDesktopMenu )

function showDesktopMenu(){

    desktopMenu.classList.toggle("inactive")

}
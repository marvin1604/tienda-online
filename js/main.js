
const menuEmail = document.querySelector(".navbar-email")
const arrowEmail =document.querySelector(".email-arrow")
const desktopMenu = document.querySelector(".desktop-menu")


const menuIcono = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const carImg = document.querySelector(".car-img")
const myOrderShopping = document.querySelector(".my-order-shoping")

menuEmail.addEventListener("click", showDesktopMenu )
arrowEmail.addEventListener("click", showDesktopMenu )
menuIcono.addEventListener("click", showMenuMobile)
carImg.addEventListener("click", showOrderCar)


function showDesktopMenu(){
    const isMyOrderShopingClose = myOrderShopping.classList.contains("inactive");
    if(!isMyOrderShopingClose){
        myOrderShopping.classList.add("inactive")
        desktopMenu.classList.toggle("inactive")
    }else{
        desktopMenu.classList.toggle("inactive")
    }
    
}
function showMenuMobile(){    
    const isMyOrderShopingClose = myOrderShopping.classList.contains("inactive");

    if(!isMyOrderShopingClose){
        myOrderShopping.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }else{
        mobileMenu.classList.toggle("inactive");
    }

    
}
function showOrderCar(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClose || !isDesktopMenuClose){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        myOrderShopping.classList.toggle("inactive");        
    } else{
        myOrderShopping.classList.toggle("inactive"); 
    }
}
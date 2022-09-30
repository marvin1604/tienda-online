
const menuEmail = document.querySelector(".navbar-email")
const arrowEmail =document.querySelector(".email-arrow")
const desktopMenu = document.querySelector(".desktop-menu")


const menuIcono = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const carImg = document.querySelector(".car-img")
const myOrderShopping = document.querySelector(".my-order-shoping")

const cardsContainer = document.querySelector(".cards-container")

const productDetail = document.querySelector(".product-detail")
const productDetailclose = document.querySelector(".product-detail-close");

const mainContainer = document.querySelector(".main-container")

menuEmail.addEventListener("click", showDesktopMenu )
arrowEmail.addEventListener("click", showDesktopMenu )
menuIcono.addEventListener("click", showMenuMobile)
carImg.addEventListener("click", showOrderCar)
productDetailclose.addEventListener("click", closeDetailProduct)


function showDesktopMenu(){
    const isMyOrderShopingClose = myOrderShopping.classList.contains("inactive");
    const isProductDetail = productDetail.classList.contains("inactive");

    if(!isMyOrderShopingClose || !isProductDetail){
        myOrderShopping.classList.add("inactive")
        productDetail.classList.add("inactive")
        desktopMenu.classList.toggle("inactive")
    }else{
         
        desktopMenu.classList.toggle("inactive")
    } 
      
}

function showMenuMobile(){    
    const isMyOrderShopingClose = myOrderShopping.classList.contains("inactive");
    const isProductDetail = productDetail.classList.contains("inactive");

    if(!isMyOrderShopingClose || !isProductDetail){
        myOrderShopping.classList.add("inactive");
        productDetail.classList.add("inactive")
        mobileMenu.classList.toggle("inactive");
    }else{
        mobileMenu.classList.toggle("inactive");
    }

    
}
function showOrderCar(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    const isProductDetail = productDetail.classList.contains("inactive");

    if(!isMobileMenuClose || !isDesktopMenuClose || !isProductDetail){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        productDetail.classList.add("inactive");
        myOrderShopping.classList.toggle("inactive");        
    } else{
        myOrderShopping.classList.toggle("inactive"); 
    }
}
function showDetailProduct(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    const isMyOrderShopping = myOrderShopping.classList.contains("inactive");
    

    if(!isMobileMenuClose || !isDesktopMenuClose || !isMyOrderShopping ){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        myOrderShopping.classList.add("inactive");        
        productDetail.classList.toggle("inactive");        
    } else{
    productDetail.classList.toggle("inactive")
    }
}

function closeDetailProduct(){
    const ifProducDetailClose = productDetail.classList.contains("inactivate")
    if(!ifProducDetailClose){
        productDetail.classList.add("inactive")
    }
}

const productList = [];
    productList.push({
        name : "LAPTOP HP 14-DQ2510LA INTEL CORE I3 8GB RAM 512GB SSD 14''",
        price : 1699,
        image : "https://home.ripley.com.pe/Attachment/WOP_5/2004293408701/2004293408701_2.jpg"
    });
    productList.push({
        name : "TALADRO PERCUTOR 1/2' + ATORNILLADOR DE IMPACTO 1/4' 20V DEWALT DCK222D2-B2",
        price : 750,
        image : "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F430%2FELECTROHOGAR%2FDCK222D2-B2_0-COMPRESSED.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=3049ee9a2a26b8ed2e515fd92a10880b"
    });
    productList.push({
        name : "SIERRA DE MESA ELÉCTRICA BOSCH 1800W GTS 254 + 1 DISCO DE 254MM",
        price : 1250,
        image : "https://ripleype.imgix.net/https%3A%2F%2Fs3-vultec-pe.s3-us-west-2.amazonaws.com%2Fmedia%2Fproduct%2F1018944_gXIzHUb.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=274e1f06451115fe8af317bf95c7c3bb"
    });
    productList.push({
        name : "AUDÍFONOS IN EAR SONY TRUE WIRELESS SONY WF-1000XM4 BMUC CON NOISE CANCELLING NEGRO",
        price : 899,
        image : "https://home.ripley.com.pe/Attachment/WOP_5/2065283128672/2065283128672_2.jpg"
    });
    productList.push({
        name : "ZAPATILLAS URBANAS NIKE PARA MUJER COURT V DH3158-103",
        price : 279,
        image : "https://ripleype.imgix.net/https%3A%2F%2Fdsoruezznvgo1.cloudfront.net%2Fseller-place-files%2Fprovider-files%2F138%2FCALZADO%2FREQ3079%2F2026291417837_2.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=21cf8645ec62835f87e08601423ff2bd"
    });
    productList.push({
        name : "BICICLETA ALTITUDE YOSEMITE 27.5",
        price : 499,
        image : "https://home.ripley.com.pe/Attachment/WOP_5/2022274953101/2022274953101_2.jpg"
    });
    productList.push({
        name : "TUHOME PANEL TV55 BEIJING - ROVERE / BLANCO",
        price : 429.90,
        image : "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F750%2FDECOHOGAR%2FPRB-3815_3_105743357648_11.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=9bc064ab9776b50218fb3b831435f8f4"
    });
    productList.push({
        name : "BAR DUKAT - COÑAC",
        price : 379.90,
        image : "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F750%2FDECOHOGAR%2FBLC-5297_4_110156378649_12.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=791093a3fec2c8429b3a44997239b3f7"
    });
    productList.push({
        name : 'CELULAR SAMSUNG GALAXY S22 ULTRA 6.8" 8GB 128GB 108MP + 10MP + 12MP + 10MP NEGRO',
        price : 4899,
        image : "https://home.ripley.com.pe/Attachment/WOP_5/2065289383181/2065289383181_2.jpg"
    });



function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
        productImage.classList.add("product-img");
        //evento de click en product
        productImage.addEventListener('click', showDetailProduct);
    
        productCard.appendChild(productImage);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        productCard.appendChild(productInfo);
    
        const producInfoDiv = document.createElement("div");
    
        productInfo.appendChild(producInfoDiv);
    
        const productPrecie = document.createElement("p");
        productPrecie.innerText = "S/." + product.price;
    
        producInfoDiv.appendChild(productPrecie);
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
        producInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCar = document.createElement("img");
        productImgCar.classList.add("logo");
        productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg" )
        
    
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(productImgCar);
    
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productList)           




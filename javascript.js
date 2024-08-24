



function hideAllSections() {
    document.getElementById("women-product").style.display = 'none';

    document.getElementById("kid-product").style.display = 'none';
    document.getElementById("men-product").style.display = 'none';
    document.getElementById("new-product").style.display = 'none';
    document.getElementById("About").style.display = 'none';
    document.getElementById("Home").style.display = 'none';
    document.getElementById("Contact").style.display = 'none';

}


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');

   
}



window.onscroll = () => {
  
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

var womenProducts = document.getElementById("women-product");
var kidProducts = document.getElementById("kid-product");
var menProducts = document.getElementById("men-product");

var newProducts = document.getElementById("new-product");
function showWomenProducts() {



    if (womenProducts.style.display === "none") {
        womenProducts.style.display = "block";
        newProducts.style.display = "none";
        kidProducts.style.display = "none";
        menProducts.style.display = "none";
    } else {
        womenProducts.style.display = "none";
        newProducts.style.display = "block";
    }
}
function showKidProducts() {




    if (kidProducts.style.display === "none") {
        kidProducts.style.display = "block";
        menProducts.style.display = "none";
        newProducts.style.display = "none";
        womenProducts.style.display = "none";
    } else {
        kidProducts.style.display = "none";
        newProducts.style.display = "block";
    }
}
function showMenProducts() {



    if (menProducts.style.display === "none") {
        menProducts.style.display = "block";
        womenProducts.style.display = "none";
        kidProducts.style.display = "none";
        newProducts.style.display = "none";
    } else {
        menProducts.style.display = "none";
        newProducts.style.display = "block";
    }
}

var About = document.getElementById("About");
var Contact = document.getElementById("Contact");
var Home = document.getElementById("Home");
function openCheckout(productId, productName, productnewPrice, productPrice, productImgSrc) {
    // Get the checkout section
    var checkoutSection = document.getElementById("checkoutSection");

    // Get the image element and set the source to the clicked product's image
    var checkoutImg = document.getElementById("checkoutImg");
    checkoutImg.src = productImgSrc;


    document.getElementById("checkoutName").textContent = productName;
    document.getElementById("checkoutnewPrice").textContent = productnewPrice;
    document.getElementById("checkoutPrice").textContent = productPrice;
    hideAllSections();

    checkoutSection.style.display = "block";
}




let cartItem = document.querySelector('.cart-container');


document.querySelector('#cart-btn').onclick = () => {



    if (cartItem.style.display === 'none' || cartItem.style.display === '') {
        hideAllSections();
        cartItem.style.display = 'block';
    } else {
        cartItem.style.display = 'none';
    }
};





let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll=()=>
{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".turf-slider", {
    loop:true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
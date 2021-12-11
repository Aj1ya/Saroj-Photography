let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
// let banner = document.querySelector('.banner');
// let smallScreen = window.matchMedia("(max-width: 550px)")

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// if(banner.classList.contains('wrapper')){
//     if(smallScreen.matches){
//         banner.classList.remove('wrapper');
//     }   
// }
// else{
//     banner.classList.add('wrapper');
// }

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    effect: 'slide',
    spaceBetween: 500,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });



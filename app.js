// navbar toggle 
let menuBar = document.querySelector('#menuBtn');
let navlinks = document.querySelector('.navlinks');

menuBar.addEventListener('click',function(){
    navlinks.classList.toggle('toggle');
})

// swiper js 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView:1,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });


// $(document).mouseup(function (e) {
//     if ($(e.target).closest(".grecaptcha-badge").length
//     === 0) {
//     $(".grecaptcha-badge").css('left','-186px');
//     }
// });
//  team section code 

var swiper = new Swiper(".myTeam", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
  });
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

let filterBtns = document.querySelectorAll('.filter_button button');
let tabItems = document.querySelectorAll('.tab-item');
let tabContainer = document.querySelector('.tab-filter-item-container');

filterBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        filterBtns.forEach((btn, j) => {
            btn.classList.remove('active');
        });

        let selectTab = btn.getAttribute('data-tab');
        btn.classList.add('active');

        tabItems.forEach((tab, t) => {
            tabContainer.style.height = tab.scrollHeight + 'px';

            if (tab.classList.contains(selectTab)) {
                tab.classList.add('select_tab');
            } else {
                tab.classList.remove('select_tab');
            }
        });
    });
});

tabItems.forEach((tab, th) => {
    tabContainer.style.height = tab.scrollHeight + 'px';
});


// gallery section 
var swiper = new Swiper(".myGallery", {
  slidesPerView: 1,
  spaceBetween: 20,
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
// client section 
var swiper = new Swiper(".myClient", {
  slidesPerView: 1,
  spaceBetween: 20,
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
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
});
import {answers} from './accordion.js';

const advantagesSwiper = document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 1020) {
    new Swiper('.advantages-swiper', {
      direction: 'horizontal',
      loop: true,
        
      pagination: {
        el: '.advantages-swiper-pagination',
        clickable: 'true',
      },
    
      navigation: {
        nextEl: '.advantages-swiper-button__next',
        prevEl: '.advantages-swiper-button__prev',
      },
    
      breakpoints: {
        0: {
          spaceBetween: 25,
        },
      
        700: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
  };
});

const benefitsSwiper = document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 1020) {
    new Swiper('.benefits-swiper', {
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.benefits__swiper-pagination',
        clickable: 'true',
      },
    
      navigation: {
        nextEl: '.benefits-swiper-button__next',
        prevEl: '.benefits-swiper-button__prev',
      },
    
      breakpoints: {
        0: {
          spaceBetween: 25,
        },
      
        700: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
  };
});


const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 3,
        spaceBetween: 64
      },
      // when window width is >= 640px
      1728: {
        slidesPerView: 3,
        spaceBetween: 74
      }
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
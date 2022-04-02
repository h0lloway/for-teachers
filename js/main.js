// BURGER

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


// SWIPERs

const congratsSwiper = new Swiper('.congrats__swiper', {
  // Optional parameters
  slidesPerView: 5,
  loop: true,
  // spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.congrats__swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.congrats__swiper-button-next',
    prevEl: '.congrats__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },

    550: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 3,
    },

    999: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    }
  }
});


const presentSwiper = new Swiper('.present__swiper', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.present__swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.present__swiper-button-next',
    prevEl: '.present__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    550: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 40,
    },

    750: {
      slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,
      centeredSlides: true,

    },

    999: {
      slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,
      centeredSlides: true,
    },

    1200: {
      slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,
      centeredSlides: true,
    }
  }

});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 5,
  autoplay: true,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "horizontal", // Set thumbnails direction to horizontal
  breakpoints: {
    "320": {
      slidesPerView: 1,
    },
    "550": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 3,
    },
    "1024": {
      slidesPerView: 4,
    },
    "1280": {
      slidesPerView: 5,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  autoplay: true,
  direction: "horizontal", // Keep main slider horizontal
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    verticalClass: "swiper-pagination-vertical", // Use vertical pagination
    direction: "vertical", //
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});



var swiper = new Swiper(".myClients", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    "320": {
      slidesPerView: 1,
    },
    "550": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 3,
    },
    "1024": {
      slidesPerView: 4,
    },
    "1280": {
      slidesPerView: 5,
    },
    "1366": {
      slidesPerView: 6,
    },
  },

});
var swiper = new Swiper(".myProjects", {
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    "320": {
      slidesPerView: 1,
    },
    "550": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 3,
    },
    "1024": {
      slidesPerView: 3,
    },
  },

});

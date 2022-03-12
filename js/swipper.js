// var swiper = new Swiper(".mySwiper", {
//   breakpoints: {
//     "@0.00": {
//       slidesPerView: 1,
//       spaceBetween: 5,
//     },
//     "@0.75": {
//       slidesPerView: 2,
//       spaceBetween: 5,
//     },
//     "@1.00": {
//       slidesPerView: 4,
//       spaceBetween: 8,
//     },
//     "@1.50": {
//       slidesPerView: 4,
//       spaceBetween: 8,
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
var swiper = new Swiper(".my-Swiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
    // cols: 2,
  },
  spaceBetween: none,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

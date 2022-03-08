//selectors
const menuBar = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const searchCloseIcon = document.querySelector("#close");
const addToCartBtn = document.querySelector(".add-btn");

// navbar
menuBar.addEventListener("click", () => {
  navbar.classList.add(
    "animate__animated",
    "animate__slideInUp",
    "animate__delay-3"
  );
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  navbar.classList.remove("show");
});

//search input
searchIcon.addEventListener("click", () => {
  searchForm.style.top = "0";
});
searchCloseIcon.addEventListener("click", () => {
  searchForm.style.top = "-110%";
});

// slider
const swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// for (let btn in addToCartBtn) {
//   btn.addEventListener("mouseover", () => {
//     btn.classList.add("animate__animated", "animate__slideOutRight");
//   });
// }

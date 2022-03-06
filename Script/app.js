//selectors
const menuBar = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");
const searchIcon = document.querySelector("#search-icon");
const searchForm = document.querySelector("#search-form");
const searchCloseIcon = document.querySelector("#close");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  navbar.classList.remove("show");
});
searchIcon.addEventListener("click", () => {
  searchForm.style.top = "0";
});
searchCloseIcon.addEventListener("click", () => {
  searchForm.style.top = "-110%";
});

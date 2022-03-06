//selectors
const menuBar = document.querySelector("#menu-bars");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("show");
  console.log(navbar.classList);
});

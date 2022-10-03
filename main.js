let burger = document.querySelector(".burger");
let close = document.querySelector(".close");
let menu = document.querySelector("nav ul");
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});
close.addEventListener("click", () => {
  menu.classList.toggle("show");
});

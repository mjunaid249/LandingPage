let mobile_btn = document.querySelector(".mobile-navbar-btn");

let header = document.querySelector(".header");

function toggleClass() {
  header.classList.toggle("active");
}
mobile_btn.addEventListener("click", () => toggleClass());

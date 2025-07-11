//<!-- Script -->
function gantiTema() {
  document.documentElement.classList.toggle("dark");
}

const hamburger = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileMenu");
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.add("hidden"));
});
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

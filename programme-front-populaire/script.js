const nav = document.querySelector("nav");
const details = document.querySelector("details");
const aside = document.querySelector("aside");
nav.addEventListener("click", closeNav);
document.addEventListener("mouseup", closeOnClicOut);
function closeOnClicOut(e) {
  if (!aside.contains(e.target)) {
    closeNav();
  }
}
function closeNav() {
  details.removeAttribute("open");
}

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");
let width = screen.width;

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const hideMobileMenu = () => {
  if (width >= 700) {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
};

window.onresize = hideMobileMenu;

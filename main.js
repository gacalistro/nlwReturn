window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButton();
}

function showNavOnScroll() {
  scrollY
    ? navigation.classList.add("scroll")
    : navigation.classList.remove("scroll");
}

function showBackToTopButton() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "0",
}).reveal(`#home,
    #home img,
    #home .numbers,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);

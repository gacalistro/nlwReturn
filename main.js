function onScroll() {
  scrollY
    ? navigation.classList.add("scroll")
    : navigation.classList.remove("scroll");
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

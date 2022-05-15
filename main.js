window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButton();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
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

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;

  const passedTop = targetLine >= sectionTop;
  const passedBottom = targetLine >= sectionBottom;

  const sectionBoundaries = passedTop && !passedBottom;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(
    `#navigation .menu a[href*=${sectionId}]`
  );

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

ScrollReveal({
  origin: "top",
  distance: "0",
}).reveal(`#home,
    #home img,
    #home .numbers,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact`);

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
  const nav = document.querySelector("#navigation");

  scrollY ? nav.classList.add("scroll") : nav.classList.remove("scroll");
}

function showBackToTopButton() {
  const backToTopBtn = document.querySelector("#backToTopButton");

  if (scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
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
  distance: "30px",
  duration: 700,
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

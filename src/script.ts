const navLinks = document.querySelectorAll(".nav-link") as NodeList;
const navbar = document.querySelector(".navbar") as HTMLElement;

const heigthNavbar: number = navbar.getBoundingClientRect().height;

const handleNavClick = (e: Event): void => {
  e.preventDefault();
  scrollToSection(e);
  changeActiveClass(e);
};

const changeActiveClass = (e: Event): void => {
  const target = e.target as HTMLElement;
  const activeElement = document.querySelector(".active");

  if (activeElement) activeElement.classList.remove("active");

  target.classList.add("active");
};

const scrollToSection = (e: Event): void => {
  const target = e.target as HTMLAnchorElement;

  const navbarLinkId = target.href.substring(target.href.indexOf("#") + 1);

  const section = document.getElementById(navbarLinkId) as HTMLElement;

  const sectionTop = section.offsetTop;

  const scrollTop = sectionTop - heigthNavbar;

  window.scrollTo({
    left: 0,
    top: scrollTop,
  });
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => handleNavClick(e));
});

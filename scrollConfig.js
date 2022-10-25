const sections = document.querySelectorAll(".section");
const navbar = document.querySelector(".navbar");
import { navLinks } from "./navbar.js";

const heigthNavbar = navbar.getBoundingClientRect().height;

const scrollToSection = (e) => {
  e.preventDefault();

  const navbarLinkId = e.target.href.substring(e.target.href.indexOf("#") + 1);

  sections.forEach((section) => {
    if (section.id === navbarLinkId) {
      const sectionTop = section.offsetTop;

      const sectionTopLessNavbarHeigth = sectionTop - heigthNavbar;

      window.scrollTo({
        left: 0,
        top: sectionTopLessNavbarHeigth,
      });
    }
  });
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => scrollToSection(e));
});

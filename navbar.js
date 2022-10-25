export const navLinks = document.querySelectorAll(".nav-link");

const changeActiveClass = ({ target }) => {
  for (const navLink of navLinks) {
    navLink.classList.remove("active");
  }

  target.classList.add("active");
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => changeActiveClass(e));
});

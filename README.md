# Digital-Agency-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about digital agency, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing Bootstrap.

## Technologies used

1. Bootstrap
2. CSS3
3. Javascript
4. HTML5

## Galery

![Digital-agency](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/digitalagency/digitalagency.jpg)

![Digital-agency](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/digitalagency/1.jpg)

![Digital-agency](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/digitalagency/2.jpg)

![Digital-agency](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/digitalagency/3.jpg)

![Digital-agency](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/digitalagency/4.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Digital%20agency%20page`

## Video

https://user-images.githubusercontent.com/99032604/199859384-a38af1b8-8f0c-495c-a609-41ba4eb00445.mp4

## Documentation

### ./navbar.js

`changeActiveClass()` this function will allow us to style the navLink that was pressed and is active:

```
const changeActiveClass = ({ target }) => {
  for (const navLink of navLinks) {
    navLink.classList.remove("active");
  }

  target.classList.add("active");
};
```

### ./scrollConfig.js

Knowing the height of the navbar that we obtain in the variable `heigthNavbar` we will be able to execute the function `scrollToSection()` which basically serves to go to a specific section when a link in the navbar is touched, that is, a navLink:

```
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
```

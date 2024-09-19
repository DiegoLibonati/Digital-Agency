# Digital Agency

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about digital agency, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing Bootstrap.

## Technologies used

1. Bootstrap
2. CSS3
3. Typescript
4. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Digital-Agency`](https://www.diegolibonati.com.ar/#/project/Digital-Agency)

## Video

https://user-images.githubusercontent.com/99032604/199859384-a38af1b8-8f0c-495c-a609-41ba4eb00445.mp4

## Documentation

`changeActiveClass()` this function will allow us to style the navLink that was pressed and is active:

```
const changeActiveClass = (e: Event): void => {
  const target = e.target as HTMLElement;
  const activeElement = document.querySelector(".active");

  if (activeElement) activeElement.classList.remove("active");

  target.classList.add("active");
};
```

Knowing the height of the navbar that we obtain in the variable `heigthNavbar` we will be able to execute the function `scrollToSection()` which basically serves to go to a specific section when a link in the navbar is touched, that is, a navLink:

```
const heigthNavbar: number = navbar.getBoundingClientRect().height;

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
```

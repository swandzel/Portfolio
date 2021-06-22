// SMOOTH SCROLL

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2200,
});

// STICKY NAVBAR

const home = document.querySelector("#home");
const navbar = document.querySelector("nav");
const navbarHeight = navbar.getBoundingClientRect().height;
const header = document.getElementById("header");

const stickyNavbar = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

const headObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  treshold: 1.0,
  rootMargin: `-${navbarHeight}px`,
});

headObserver.observe(home);

// FADE IN-OUT HEADER

const textFade = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting && window.innerWidth > 1300) {
    header.classList.add("opacity");
  } else header.classList.remove("opacity");
};

const observer = new IntersectionObserver(textFade, {
  root: null,
  threshold: 1,
  rootMargin: `-${navbarHeight}px`,
});

observer.observe(header);

// BURGER / MOBILE MENU

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navbar-links");
const navLinksUl = document.querySelectorAll(".navbar-links-li");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

const closeMenu = () => {
  navLinks.classList.remove("active");
};

for (let i = 0; i < navLinksUl.length; i++) {
  navLinksUl[i].addEventListener("click", closeMenu);
}

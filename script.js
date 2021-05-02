// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector("nav");
//   const logo = document.querySelector("#logo");
//   navbar.classList.toggle("sticky", window.scrollY > 700);
//   logo.classList.toggle("sticky", window.scrollY > 700);
// });

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2200,
});

// STICKY NAVBAR

const home = document.querySelector("#home");
const navbar = document.querySelector("nav");
const navbarHeight = navbar.getBoundingClientRect().height;
const header = document.getElementById("header");
// const homeHeight = home.getBoundingClientRect().height;
// const homeHeightDivision = homeHeight / 1.8;

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
// console.log(navbarHeight);

headObserver.observe(home);

// FADE IN - OUT HEADER

const textFade = function (entries) {
  // console.log(entries[0]);
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("opacity");
  else header.classList.remove("opacity");
};

const observer = new IntersectionObserver(textFade, {
  root: null,
  threshold: 1,
  rootMargin: `-${navbarHeight}px`,
});

observer.observe(header);

// const header = document.getElementById("header");

// const fadeOutIntro = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) header.classList.add("opacity");
//   else header.classList.remove("opacity");
// };

// const headIntroObserver = new IntersectionObserver(fadeOutIntro, {
//   root: null,
//   treshold: 0,
//   rootMargin: `-${homeHeightDivision}px`,
// });

// headIntroObserver.observe(header);

// const observerOptions = {
//   root: null,
//   rootMargin: `-100px`,
//   threshold: 0.8,
// };

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // fade in observed elements that are in view
//       entry.target.classList.remove("opacity");
//     } else {
//       // fade out observed elements that are not in view
//       entry.target.classList.add("opacity");
//     }
//   });
// }

// const fadeElms = document.querySelectorAll("#header");

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// fadeElms.forEach((el) => observer.observe(el));

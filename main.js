const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger");
const revealButton = document.querySelector(".service-item:nth-child(2) .btn");
const containerWrapper = document.querySelector(".container-wrapper");
const animatedElements = document.querySelectorAll(".animate");
const links = document.querySelectorAll("header nav>ul>*");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

links.forEach((link) =>
  link.addEventListener("click", () => header.classList.remove("active"))
);

revealButton.addEventListener("click", () => {
  const currentScrollPosition = containerWrapper.scrollLeft;

  if (currentScrollPosition === 0) {
    const scrollPosition =
      containerWrapper.scrollWidth - containerWrapper.clientWidth;

    revealButton.style.rotate = "180deg";

    containerWrapper.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  } else {
    revealButton.style.rotate = "0deg";
    containerWrapper.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

animatedElements.forEach((el) => {
  observer.observe(el);
});

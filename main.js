const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

const revealButton = document.querySelector(".service-item:nth-child(2) .btn");
const containerWrapper = document.querySelector(".container-wrapper");

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

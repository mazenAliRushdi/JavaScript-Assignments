const imageContainers = document.querySelectorAll("div");
const logoSrc = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
const logoAlt = "Elzero Logo";

imageContainers.forEach((container) => {
  const imgElement = container.querySelector("img");
  if (imgElement) {
    imgElement.src = logoSrc;
    imgElement.alt = logoAlt;
  }
});

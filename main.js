const allElements = document.querySelectorAll("div, span, p, article, section");

allElements.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(`This Is ${this.tagName}`);
  });
});

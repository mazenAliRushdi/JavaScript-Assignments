const allImages = document.querySelectorAll("img");
const oldText = "Old";
const newText = "Elzero New";

for (let i = 0; i < allImages.length; i++) {
  if (allImages[i].hasAttribute("alt")) {
    allImages[i].alt = oldText;
  } else {
    allImages[i].alt = newText;
  }
}

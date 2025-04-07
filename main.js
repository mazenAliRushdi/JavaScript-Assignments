const fontSelect = document.getElementById("font-select");
const colorSelect = document.getElementById("color-select");
const sizeSelect = document.getElementById("size-select");
const bodyElement = document.body;
const fontMap = {
  Open: "'Open Sans', sans-serif",
  Cairo: "'Cairo', sans-serif",
  Roboto: "'Roboto', sans-serif",
};

// Function to apply changes and save them to Local Storage
function applyChanges() {
  const selectedFont = fontSelect.value;
  const selectedColor = colorSelect.value;
  const selectedSize = sizeSelect.value;

  bodyElement.style.fontFamily = fontMap[selectedFont];
  bodyElement.style.color = selectedColor;
  bodyElement.style.fontSize = selectedSize;

  localStorage.setItem("selectedFont", selectedFont);
  localStorage.setItem("selectedColor", selectedColor);
  localStorage.setItem("selectedSize", selectedSize);
}

// Add event listeners for changes to apply the styles
fontSelect.addEventListener("change", applyChanges);
colorSelect.addEventListener("change", applyChanges);
sizeSelect.addEventListener("change", applyChanges);

// Check for saved preferences in Local Storage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedFont = localStorage.getItem("selectedFont");
  const savedColor = localStorage.getItem("selectedColor");
  const savedSize = localStorage.getItem("selectedSize");

  if (savedFont) {
    bodyElement.style.fontFamily = fontMap[savedFont];
    fontSelect.value = savedFont;
  }
  if (savedColor) {
    bodyElement.style.color = savedColor;
    colorSelect.value = savedColor;
  }
  if (savedSize) {
    bodyElement.style.fontSize = savedSize;
    sizeSelect.value = savedSize;
  }
});

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const citySelect = document.getElementById("city");

// Function to save the input field value to Session Storage
function saveInputValue(element) {
  sessionStorage.setItem(element.id, element.value);
}

// Function to restore the input field value from Session Storage
function restoreInputValue(element) {
  const savedValue = sessionStorage.getItem(element.id);
  if (savedValue) {
    element.value = savedValue;
  }
}

// Function to save the selected value of the Select Box to Session Storage
function saveSelectValue(selectElement) {
  sessionStorage.setItem(selectElement.id, selectElement.value);
}

// Function to restore the selected value of the Select Box from Session Storage
function restoreSelectValue(selectElement) {
  const savedValue = sessionStorage.getItem(selectElement.id);
  if (savedValue) {
    selectElement.value = savedValue;
  }
}

// Restore values on page load
window.onload = function () {
  restoreInputValue(nameInput);
  restoreInputValue(emailInput);
  restoreInputValue(ageInput);
  restoreSelectValue(citySelect);
};

// Save values on input change
nameInput.addEventListener("input", function () {
  saveInputValue(this);
});

emailInput.addEventListener("input", function () {
  saveInputValue(this);
});

ageInput.addEventListener("input", function () {
  saveInputValue(this);
});

// Save selected value on select change
citySelect.addEventListener("change", function () {
  saveSelectValue(this);
});

// Clear data from Session Storage on page unload (when the page is closed)
window.onbeforeunload = function () {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  sessionStorage.removeItem("age");
  sessionStorage.removeItem("city");
};

const userInput = prompt("Print Number From - To", "Example: 5-20");

if (userInput) {
  const numbers = userInput
    .split("-")
    .map(Number)
    .filter((num) => !isNaN(num));

  if (numbers.length === 2) {
    const start = Math.min(numbers[0], numbers[1]);
    const end = Math.max(numbers[0], numbers[1]);

    for (let i = start; i <= end; i++) {
      document.body.innerHTML += `${i}<br>`;
    }
  } else {
    document.body.innerHTML =
      "Invalid Input. Please use the format: number-number";
  }
} else {
  document.body.innerHTML = "No input provided.";
}

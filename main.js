let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invertedNumbers = numsAndStrings
  .filter(function (element) {
    return typeof element === "number";
  })
  .map(function (number) {
    return -number;
  });

console.log(invertedNumbers); // [-1, -10, 10, 20, -5, -3]

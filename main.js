let myString = "EElllzzzzzzzeroo";

let uniqueLetters = Array.from(myString)
  .filter(function (element, index, arr) {
    return arr.indexOf(element) === index;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, "");

console.log(uniqueLetters); // Elzero

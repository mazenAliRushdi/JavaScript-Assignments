let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattenedAndConcatenated = myArray
  .reduce(function (accumulator, currentValue) {
    if (Array.isArray(currentValue)) {
      return accumulator.concat(currentValue);
    } else {
      return accumulator.concat(currentValue);
    }
  }, [])
  .reduce(function (acc, curr) {
    return acc + curr;
  }, "");

console.log(flattenedAndConcatenated); // Elzero

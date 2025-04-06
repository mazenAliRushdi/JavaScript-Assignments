function specialMix(...data) {
  let numbers = [];
  let allStrings = true;

  for (const item of data) {
    if (typeof item === "number") {
      numbers.push(item);
      allStrings = false;
    } else if (typeof item === "string") {
      const num = parseInt(item);
      if (!isNaN(num)) {
        numbers.push(num);
        allStrings = false;
      }
    }
  }

  if (allStrings) {
    return "All Is Strings";
  }

  if (numbers.length > 0) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  } else {
    return 0; // في حال لم يتم العثور على أي أرقام
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log(specialMix("Test", "Cool", "Test", 5)); // 5
console.log(specialMix("10", "20", "30")); // 60
console.log(specialMix()); // 0

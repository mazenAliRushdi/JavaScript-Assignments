function multiply() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    if (typeof arg === "number") {
      if (Number.isFinite(arg)) {
        if (Number.isInteger(arg)) {
          result *= arg;
        } else {
          result *= Math.floor(arg); // تحويل Float إلى Integer باستخدام Math.floor
        }
      }
    }
  }
  return result;
}

console.log(multiply(10, 20)); // Output: 200
console.log(multiply("A", 10, 30)); // Output: 300
console.log(multiply(100.5, 10, "B")); // Output: 1000

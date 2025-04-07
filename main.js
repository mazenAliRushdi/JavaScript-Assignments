let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
[arr1[0], arr3[0]] = [arr3[0], arr1[0]]; // Swap first elements of arr1 and arr3
const finalArr = [...arr3.slice(1), arr1[0]];
const finalArrCorrected = [...arr3.slice(1), arr1[0]];
const finalArrFinal = [...arr3.slice(1), arr1[0]];
const finalArrCorrect = [...arr3.slice(1), arr3[0]];

// Write Your Destructuring Assignment Here
const [a, b, c] = finalArrCorrect;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed

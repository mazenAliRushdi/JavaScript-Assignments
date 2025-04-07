// Create a new Set named setOfNumbers and add the number 10 during creation
const setOfNumbers = new Set([10]);

// Add the number 20 to the Set in a separate line and add a new element which is the size of the previous Set
setOfNumbers.add(20).add(setOfNumbers.size);

// Print the Set to the Console
console.log(setOfNumbers); // Set(3) {10, 20, 2}

// In a single separate line, use what you learned to print the last element in the Set
console.log([...setOfNumbers].pop()); // 2

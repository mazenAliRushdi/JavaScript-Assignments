let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Solution 1: Using includes()
if (haystack.includes(needle)) {
  console.log("Found");
}

// Solution 2: Using indexOf()
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

// Solution 3: Using find()
if (haystack.find((element) => element === needle)) {
  console.log("Found");
}

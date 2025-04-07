let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Create a new Map from the Object
const myInfoMap = new Map(Object.entries(myInfo));

// Print the content of the Map
console.log(myInfoMap); // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}

// Print the number of elements in the Map
console.log(myInfoMap.size); // 3

// Check if the Map contains an element with the key 'role'
console.log(myInfoMap.has("role")); // true

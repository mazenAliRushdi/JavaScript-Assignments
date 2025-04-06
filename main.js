let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"]

// Reset myFriends to its original value for the second method
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

// Method 2
let end = myFriends.indexOf("Gamal");
let newArray = myFriends.slice(0, end);
console.log(newArray); // ["Ahmed", "Elham", "Osama"]

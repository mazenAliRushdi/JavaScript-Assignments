// Method One: Object Literal
const objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two: Using the 'new Object()' constructor
const objMethodTwo = new Object();
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three: Using a Constructor Function
function MyObjectThree() {
  this.property = "Method Three";
}
const objMethodThree = new MyObjectThree();
console.log(objMethodThree.property); // "Method Three"

// Method Four: Using Object.create() with a prototype object
const prototypeObj = {
  property: "Default Property",
};
const objMethodFour = Object.create(prototypeObj);
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"

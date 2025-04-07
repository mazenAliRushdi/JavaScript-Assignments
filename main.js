class Car {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  run() {
    console.log("Car Is Running Now");
  }

  stop() {
    console.log("Car Is Stopped");
  }
}

// Creating three car instances
const carOne = new Car("MG", 2022, 420000);
const carTwo = new Car("Toyota", 2023, 550000);
const carThree = new Car("Hyundai", 2021, 380000);

// Printing the details of the first car
console.log(
  `Car One Name Is ${carOne.name} And Model Is ${carOne.model} And Price Is ${carOne.price}`
);

// Calling the run method of the first car
carOne.run();

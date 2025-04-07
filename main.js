let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
let re = /(\d{1,2})[\/\s-]*(\d{1,2})[\/\s-]*(\d{2,4})/; // Write Pattern Here

console.log(date1.match(re)); // ["25/10/1982", "25", "10", "1982", index: 0, input: "25/10/1982", groups: undefined]
console.log(date2.match(re)); // ["25 - 10 - 1982", "25", "10", "1982", index: 0, input: "25 - 10 - 1982", groups: undefined]
console.log(date3.match(re)); // ["25 10 1982", "25", "10", "1982", index: 0, input: "25 10 1982", groups: undefined]
console.log(date4.match(re)); // ["25 10 82", "25", "10", "82", index: 0, input: "25 10 82", groups: undefined]

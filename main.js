let theNumber = 100020003000;
// Needed Output
// 123

console.log(
  Number([...new Set(String(theNumber))].filter((n) => n !== "0").join(""))
);

let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
  if (i < 10) {
    console.log("0" + i);
  } else {
    console.log(i);
  }
  if (i === stop) {
    break;
  }
}

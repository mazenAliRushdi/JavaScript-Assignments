let index = 10;
let jump = 2;
let stop = 4;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < stop) {
    break;
  }
}

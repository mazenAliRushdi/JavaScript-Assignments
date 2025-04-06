let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start + start + 1; i < mix.length; i++) {
  if (typeof mix[i] === typeof start) {
    console.log(mix[i]);
  }
}

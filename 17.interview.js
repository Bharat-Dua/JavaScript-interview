//* 1.
// make first letter uppercase and each word in new line
const a = "hello world";
const b = a
  .split(" ")
  .map((ele) => ele[0].toUpperCase() + ele.slice(1))
  .join(" ")
  .replace(" ", "\n");
console.log(b); // "hello\nworld"

//* 2.
console.log(isNaN('fd"')); // true

//* 3.
console.log(!"javascript"); // false

//* 4.
console.log(+false); // 0

//* 5.
var arr = [1, 2, 3, 4];
function ar(a, ...b) {
  console.log(b); // [7,8,9]
}
ar(6, 7, 8, 9);

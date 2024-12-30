//* 1.
function sum(a = 100, b = 200) {
  console.log(a + b); // Output: 120
}

console.log(sum(undefined, 20)); // undefined because the function does not return a value.

//* 2.
function sum(a = 100, b = 200) {
  console.log(a + b); // Output: 20 -> bcoz null is a defined value and does not trigger the default parameter), null is treated as 0 when performing arithmetic operations,
}

console.log(sum(null, 20)); // undefined -> bcoz function just consoling not returning anything

//* 3.
// write a function that terminate the loop and returns 0-3 as it reaches at value 3
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((num) => {
  console.log(num); // Output: 0, 1, 2, 3
  if (num == 3) {
    return (arr.length = 0);
  }
});

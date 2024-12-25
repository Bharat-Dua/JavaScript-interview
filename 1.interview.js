//* 1.
console.log(1 + "1"); // "11" (string concatenation)
//* 2.
console.log(1 * "1"); // 1 (number multiplication) , string gets converted to number
//* 3.
console.log(1 - "1"); // 0 (number subtraction) , string gets converted to number
//* 4.
console.log("1" - 1); // 0 (number subtraction) , string gets converted to number
//* 5.
setTimeout(function () {
  console.log(10); // 10 after 10 ms
}, 10);
console.log(2); // 2 (immediately executed)
//* 6.
console.log("1" - 1);
setTimeout(function () {
  console.log(10);
}, 10); // -> output:- 0,92,12,10,11
console.log(92);
setTimeout(() => {
  console.log(11);
}, 10);
setTimeout(() => {
  console.log(12);
}, 9);

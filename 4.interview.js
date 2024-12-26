//* 1.
//* specificity:- callbacks>promise queue(microtask queue)> task queue(callback queue)

setTimeout(() => {
  console.log("settimeout");
});
Promise.resolve(4).then(function () {
  // output:- 'promise resolve','settimeout'
  console.log("promise resolve");
});

//* 2.
Promise.resolve(4).then(function () {
  console.log("promise resolve");
}); // output:- 'promise resolve','settimeout'
setTimeout(() => {
  console.log("settimeout");
});

//* 3.
console.log(1 + "1" + 1); // output:- '11' -> '11'+1 ->'111'

//* 4.
console.log(1 - "1" + 1); // output:- 1-'1' -> 0+1 -> 1

//* 5.
// multiplication of all array elements using reduce
let arr = [1, 2, 3];
let result = arr.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(result);

//* 6.
let a = [2, 3, 4].unshift(10);
console.log(a); // output :- 4 (length of array)

//* 7.
let a1 = [3, 4, 5];
a1.unshift(6);
console.log(a1); // output:- [6,3,4,5]

//* 8.
console.log(isNaN("Hello")); // output:- true

//* 9.
isNaN(console.log(2)); // output:- 2

//* 10.
// check is array or not
console.log(Array.isArray(a1)); // output:- true

//* 11.
// flat an array into single array
const c = [
  [1, 2],
  [5, 7],
  [9, 3],
];
// using in-built
const flatArray = c.flat();
console.log(flatArray); // output:- [1, 2, 5, 7, 9, 3]
// using destructring
const output = [...c[0], ...c[1], ...c[2]];
console.log(output); // output:- [1, 2, 5, 7, 9, 3]

//* 12.
// find index of 4
const d = [1, 2, 3, 4, 5];
console.log(d.indexOf(4));

//* 13.
x=4;
console.log(x); // output:- Reference error bcoz x is in TDZ
let x;
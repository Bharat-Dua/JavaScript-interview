//* 1.
console.log(a); // output- undefined
console.log(b); // output - 5
var a = (b = 5);

//* 2.
let a = 2;
let a = 5;
console.log(a); // Can't redeclare block -scoped variable a

//* 3.
var a = 5;
var a = 6;
console.log(a); // output - 6 bcoz of global scope of var

//* 4.
// flat array into single array

// using built-in method
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let b = arr.flat();
console.log(b); // output - [1,2,3,4,5,6]

// without built-in
function flat(a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      for (let j = 0; j < a[i].length; j++) {
        result.push(a[i][j]);
      }
    }
  }
  console.log(result);
  return result;
}

console.log(flat(arr)); // [1,2,3,4,5,6]

//* 5.
console.log("4" + 6 * 5); // output - '430' -> bcoz * has more precedence than +

//* 6.
console.log("4" * 6 + 5); // output - 29 -> bcoz '4' gets converted into number

//* 7.
console.log(typeof NaN); // output - number

//* 8.
console.log("5" - "3" + 6); // output - 8 -> bcoz '5' and '3' gets converted into number

//* 9.
// sort it without using built-in method
let strArr = ["a", "e", "z", "t"];
// with using built-in
console.log(strArr.sort()); // output - ['a', 'e', 't', 'z']
// without using built-in
function sortStringArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log(sortStringArray(strArr));

//* 10.
console.log(NaN == NaN); // output - false
console.log(NaN === NaN); // output - false

//* 11.
// return the longest string in the array

// using built-in
let str = ["I", "love", "JavaScript"];
console.log(str.reduce((a, b) => (a.length > b.length ? a : b)));
// without using built-in
function findLongestWord(str) {
  let r = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > r.length) {
      r = str[i];
    }
  }
  return r;
}
console.log(findLongestWord(str));
// or
let str1 = "i love javascript programming webdevelopment";
function findLongestWord(str) {
  let word = str.split(" ");
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > result.length) {
      result = word[i];
    }
  }
  return result;
}
console.log(findLongestWord(str1));

//* 12.
// find the factorial of number
function factorialOfNumber(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialOfNumber(5));
// using recursion
function factorial(num) {
  if (num < 3) return num;
  return num * factorial(num - 1);
}
console.log(factorial(5));

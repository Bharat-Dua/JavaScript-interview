//* 1.
function fuc1() {
  return 2;
}
function fuc2() {
  return 4;
}
let a = (fuc1(), fuc2());
console.log(a); // 4 -> bcoz of comma operator

//* 2.
let arr = ["one", "two", "three"];
let str = "Hello there,this is my test of javascript";
let res = arr.includes("on");
console.log(res); // false -> bcoz in array we check for an element not the single chr.
let out = str.includes("l");
console.log(out); // true -> bcoz in strings we check char by chr.

//* 3.
console.log(true == ""); // false

//* 4.
let b = 10;
let c = new Number(10); // new keyword is used to create a new object typeof string as '10'
let d = 10;
console.log(b === c); // false

//* 5.
let obj = { name: "Bharat" };
let z = { ...obj };
z.name = "Bohny";
console.log(obj.name); // output:- Bharat -> bcoz of shallow copy

//* 6.
console.log(+true); // 1
console.log(!"xyz"); // false

//* 7.
// WAP of alternate of each char of string
let str1 = "hello";
let str2 = "world";
function alterCharOfStr(str1, str2) {
  let alterStrResult = "";
  let maxLength = Math.max(str1.length, str2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) alterCharOfStr += str1[i];
    if (i < str2.length) alterCharOfStr += str2[i];
  }
  console.log(alterCharOfStr);
  return alterStrResult;
}
console.log(alterCharOfStr(str1, str2));

//* 8.
// write a common function for sum
function sumOfTwoNum(a, b) {
  if (b) {
    return a + b;
  } else {
    return function (b) {
      return a + b;
    };
  }
}
console.log(sumOfTwoNum(2, 4));
console.log(sumOfTwoNum(2)(4));

//* 9.
// flat an array
let array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// using built-in
let flat = array.flat();
console.log(flat);
// without using built-in
function flat(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flat(array));
// using recursion
function flatten(array) {
  let result = [];
  function subArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        subArray(array[i]);
      } else {
        result.push(array[i]);
      }
    }
  }
  subArray(array);
  return result;
}
console.log(flatten(array));

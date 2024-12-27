//* 1.
let a = [];
let b = [];
console.log(a == b); // output:- false bcoz array/object compare ref in memory
console.log(a === b); // output:- false bcoz array/object compare ref in memory

//* 2.
let c = [];
let d = c;
console.log(c == d); // output:- true bcoz->same ref in memory

//* 3.
let a = [1, 8, 9, 10, 22, 57, 27];
function array(b, ...a) {
  console.log(a); // output:- [8,9,10,11]
}
array(3, 8, 9, 10, 11);

//* 4.
let data = { name: "bharat" };
console.log(delete data.name); // output:- true
console.log(data); // output:- { }

//* 5.
let obj = { name: "paras" };
console.log(delete obj); // output:- false

//* 6.
let arr = [1, 2, 3, 4, 5, 6];
console.log(delete arr); // output:- false

//* 7.
let numArr = [1, 2, 3, 4, 5, 6];
let [a, b, c, ...d] = numArr;
console.log(a, b, c, d);

//* 8.
let val = false || {} || undefined;
console.log(val); // output:- {} -> bcoz OR operator move from R to L till it find truthy value if all are falsy it returns the last value

//* 9.
// reverse the number
let num = 1234;
// using built-in
console.log(Number(num.toString().split("").reverse().join("")));
// using loop
function reverseNum(num) {
  let strNum = num.toString();
  let reversedNum = "";
  for (let i = strNum.length - 1; i >= 0; i--) {
    reversedNum += strNum[i];
  }
  return Number(reversedNum);
}
console.log(reverseNum(num));

//* 10.
console.log(x); // output:- undefined
console.log(y); // output:- Reference Error: y is not defined
var x = (y = 6);

//* 11.
console.log("3" + 12 * 5); // output:- '360'

//* 12.
console.log("3" + 12 + 5); // output:- '3125'

//* 13.
console.log('3'+'12'+5) // output:- '3125'
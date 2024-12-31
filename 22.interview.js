//* 1.
console.log("" > -1);

//* 2.
console.log("" === true); // false

//* 3.
console.log("javascript" > "programmer"); // false bcoz when we compare with string we don't compare the length instead the first letter of string given

//* 4.
console.log(![] + []); // false bcoz [] is an  object and object is truthy and not operator will make it false and when we use + so js implicity convert the [] into empty string('') so '"false"'+''->false

//* 5.
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 23;
a[c] = 43;
console.log(a[b]); // 43 bcoz of setting object as key property in string concept

//* 6.
var x = 12;
{
  var x = -4;
}
let z = x;
{
  let z = -34;
}
console.log(z); // -4 bcoz var has no block scope

//* 7
a = 5;
let a;
console.log(a); // Reference error bcoz a is in TDZ .Variables declared with let are hoisted but not initialized. They enter the TDZ from the start of the block until the declaration is encountered.During the TDZ, any access or assignment to the variable (even assignment) results in a ReferenceError.

//* 8.
// fibonacci series
function f(num) {
  if (num < 0) return;
  if (num < 3) return 1;
  return f(num - 1) + f(num - 2);
}
console.log(f(4)); // 3

//* 9.
// remove duplicate
// brute force
let a = [1, 2, 3, 4, 5, 2, 4];
function removeDup(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        b.push(a[i]);
      }
    }
  }
  console.log(b);
  return b;
}
console.log(removeDup(a)); // [2,4]
// optimised approach
let a = [1, 2, 3, 4, 5, 2, 4];

function returnDuplicate(a) {
  let b = {};
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (b[a[i]]) {
      if (b[a[i]] === 1) {
        result.push(a[i]);
      }
      b[a[i]]++;
    } else {
      b[a[i]] = 1;
    }
  }
  return result;
}
console.log(returnDuplicate(a));

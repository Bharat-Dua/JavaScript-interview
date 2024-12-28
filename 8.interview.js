//* 1.
// pure function- same output,same input,no side effect
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// impure function - same input, different output, side effect
let count = 0;
function impure() {
  count += 1;
  return count;
}
console.log(impure()); // 1
console.log(impure()); // 2
console.log(impure()); // 3

//* 2 .
console.log(a); // Reference error
console.log(b); // undefined
var b = (a = 12);

//* 3.
var c = [];
var d = [];
console.log(c == d); // false

//* 4.
function a() {
  var a = 4;
  let d = 6;
}
console.log(a); // Reference error - due to scope var has function scope
console.log(d); // Reference error - due to scope let has block scope

//* 5.
const obj = [
  { name: "ram", age: 5, gender: "M" },
  { name: "sita", age: 5, gender: "F" },
  { name: "hauman", age: 7, gender: "M" },
];
obj.forEach((person) => {
  if (person.gender === "F") {
    console.log(person);
  }
});

//* 6.
console.log("a" / 2); // NaN

//* 7.
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

//* 8.
let c = "a" * 1; // NaN
let d = "abc" / 3; // NaN
console.log(c == d); // false

//* 9.
console.log(1 == "1"); // true

//* 10. Recursion example
function a(num) {
  if (num < 0) {
    console.log(num);
    return;
  }
  console.log(num);
  a(num - 1);
}
a(5);

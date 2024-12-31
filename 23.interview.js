//* 1.
let a = [1, 2, 3, 4, 5, 6];
let b = a.filter((ele) => ele > 2);
console.log(b); // [3,4,5,6]

//* 2.
let obj = { name: "bharat" };
console.log(obj); // {name: "bharat"}
console.log(obj.name); // bharat
delete obj.name;
console.log(obj.name); // undefined

//* 3.
function a(a, ...b) {
  console.log(b); // [45,4,3,3]
  console.log("hello"); // 'hello'
  return a;
}

console.log(a(3, 45, 4, 3, 3)); // undefined
a(3, 435, 4, 3, 3); // 3

//* 4.
console.log("my number", m); // Reference error
m = 5;
console.log("my number", m); // 5

//* 5.
var sum = 100 + score;
var score = 54;
console.log(sum); //NaN -> due to hoisting

//* 6.
var sum = 100 + score;
score = 54;
console.log(sum); // Reference error

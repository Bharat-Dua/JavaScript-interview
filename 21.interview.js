//* 1.
let arr = [1, 22, 323, 4, 56];
let result = arr.reduce((acc, cur) => {
  acc < cur;
}, 0);
console.log(result); // true -> bcoz The initial value of the accumulator is 0, and during each iteration, the comparison acc < cur is performed.Since true is coerced to 1 in comparisons, the result remains true throughout the iterations.The final output of result is true.

//* 2.
var a = 4;
function b() {
  console.log(a); // undefined -> bcoz of shadowing in js read about it
  var a = 5;
}
console.log(b()); // undefined

//* 3.
console.log(abc()); // undefined
function abc() {
  console.log("pqr"); // 'pqr','pqr -> bcoz of function hoisting and closure
}
abc();

//* 4.

function a() {
  return function () {
    console.log("Javascript"); // "Javascript" bcoz of currying
  };
}
a()();

//* 5.

function b() {
  return function () {
    console.log("dev"); // "dev" bcoz of currying
  };
}
console.log(b()()); // undefined bcoz function is not returning

//* 6.
// give example to make empty array
let arrEx = [1, 2, 3, 4];
// 1.
arrEx.length = 0;
console.log(arrEx); // [] bcoz of array length property
// 2.
arrEx.splice(0, arrEx.length);
console.log(arrEx); // [] bcoz of splice method
// 3.
while (arrEx.length > 0) {
  arrEx.shift();
}
console.log(arrEx);
// 4.
while (arrEx.length > 0) {
  arrEx.pop();
}
console.log(arrEx);

//* 7.
const c = { name: "bharat" };
const d;
d=c;
c.name = "paras";
console.log(d.name); // Error bcoz of const

//* 8.
const e = { name: "bharat" };
const f = e;
e.name = "paras";
console.log(f.name); // 'paras' in the case of

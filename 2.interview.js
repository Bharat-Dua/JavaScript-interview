//* 1.
console.log(1 + "1" + 1); // (1+'1')-> '11' -> '11'+1 -> '111'

// *2.
console.log(1 + 1 - "1"); // (1+1)->2 -> 2-'1' -> 1

//* 3.
let x = 0,
  y = { name: "bharat" },
  z = { name: "paras" };
x[y] = { name: "salman" };
x[z] = { name: "srk" };
console.log(x[y]); // Output: {name:"srk"}
/* 
Explanation:
Object to String Conversion: In JavaScript, when you use an object as a property key, it gets converted to a string. Both y and z are objects, and when they are used as keys, they are converted to the string "[object Object]".

Property Overwriting: Since both y and z are converted to the same string "[object Object]", the second assignment (x[z] = { name: "srk" };) overwrites the first assignment (x[y] = { name: "salman" };).

So, when you log x[y], it outputs { name: "srk" } because the property "[object Object]" now holds the value { name: "srk" }.
*/

//* 4.
console.log(NaN === NaN); // false

//* 5.
console.log(1 > 2 < 3); // (1>2->false(0) -> false(0)<3 -> true

//* 6.
[x, y, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30,40,50]

//* 7.
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 5 5 5 5 5 -> Because of the closure var i is not block scoped here it's function scoped
  }, 1000);
}

//* 8.
let a = 3,
  b = 5;
[b, a] = [a, b]; // ES6 Destructuring assignment
console.log(a, b); // 5 3

//* 9.
// reverse a string
// using built-in method
let str = "javascript";
let reverse = str.split("").reverse().join();
console.log(reverse);

// without using built-in method
let output = "";
for (let i = str.length - 1; i >= 0; i--) {
  output += str[i];
}
console.log(output);

//* 10.
// merge two arrays
let arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);
// or
for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log(arr1);

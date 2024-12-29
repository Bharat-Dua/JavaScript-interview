//* 1.
let a = (4, 5, 6);
console.log(`x= ${a}`); // 6 -> bcoz of comma operator

//* 2.
function c() {}
var c;
console.log(c); // bcoz -> When a variable and a function have the same name, the function declaration takes precedence

//* 3.
let a = 10;
console.log(a.toString()); // '10'
console.log(a.toString(8)); // '12' -> bcoz of toString() method with radix 8 (octal)

//* 4.
function a() {
  console.log("h");
}
console.log(a()); // undefined -> bcoz here we are just consoling/printing the value not returning any value so it will return an undefined

//* 5.
function a(n, d) {
  "use strict";
  n = 4;
  d = 7;
  return arguments[0] + arguments[1];
}
console.log(a(3, 2)); // 5 bcoz-> In strict mode, the arguments object is not linked to the function's parameters (n and d). This means any change to n or d does not affect arguments[0] or arguments[1].

//* 6.
function a(n, d) {
  n = 4;
  d = 7;
  return arguments[0] + arguments[1];
}
console.log(a(3, 2)); // 11 bcoz-> n,d will get override

//* 7.
("use strict");
{
  function a() {
    console.log("hi");
  }
}
a(); //In strict mode ("use strict";), they are block-scoped, so calling a() outside the block would throw a ReferenceError.

//* 8.
{
  function a() {
    console.log("hi"); // 'hi
  }
}
a(); // In non-strict mode, they are hoisted to the global scope or the enclosing function scope.

//* 9.
function a() {
  b = 5; // If you’re not in strict mode, the interpreter does not throw an error for the missing declaration.  Instead, it creates a global variable x and assigns the value 10 to it.  This happens even if the code is inside a function.
  console.log(b);
}
a();
let b; // syntaxerror- bcoz let variables are block-scoped and cannot redeclare a variable in the same scope.JavaScript throws a SyntaxError if it finds a conflict between an implicit global variable (b) and the block-scoped let b.

//* 10.
class a {}
console.log(typeof a); // 'function'

//* 11.

new xyz(); // ReferenceError: xyz is not defined bcoz classes are not fully hoisted even though they are typeof function
function abc() {
  console.log("hi");
}
class xyz {}

//* 12.
console.log(10 + isNaN(4) ? 200 : 300); // 200 bcoz 10 + 0(false) = 10 and 10 is a truthy value

//* 13.
console.log(10 == 10); // true
console.log((10 == 10) == 10); // false
console.log(((10 == 10) == 10) == 0); // true

//* 14.
console.log(parseInt("")); // NaN
console.log(parseInt("0")); // 0
console.log(Number("")); // 0
console.log(Number(true)) // 1

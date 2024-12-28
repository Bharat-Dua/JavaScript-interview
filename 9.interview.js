//* 1.
//? Note:- When you define a function in JavaScript, it is stored as a function object. This object has properties and methods, just like any other object. For example:

function myFunction() {
  console.log("Hello, World!");
}
/*
 Behind the scenes, myFunction is stored as an object with properties such as name, length, and methods like call() and apply().
You can inspect the properties of a function object:
 */
console.log(myFunction.name); // Outputs: "myFunction"
console.log(myFunction.length); // Outputs: 0 (number of parameters)

//* 2.
abc = 6;
console.log(abc); // Outputs: 6 -> bcoz Implicit global variables are created when you assign a value to an undeclared variable, but the assignment itself is not hoisted.

//* 3.
let arr = [300, 200, 70, 430, 100];
arr.sort();
console.log(arr); // Outputs: [ 100, 200, 300, 430, 70 ] -> bcoz sort() the elements acc to first letter of element as string

//* 4.
console.log([] == []); // false -> diff refrence/memory location
console.log([] == ""); // true -> both are empty string, [] gets convert into empty string bcoz BTS [] typeof is a object of type string -> 'object'

//* 5.
function a(a, b, c = 5) {}
console.log(a.length); // Outputs: 2 -> bcoz c is default parameter, so it is not included in

//* 6.
let arr1 = [1, 2, 3, 4];
delete arr1[2];
console.log(arr1); // [1,2,3,4]
console.log(arr1.length); //4 -> bcoz delete only delete the value at that index and shows undefined on the deleted index, but length is not changed

//* 7.
let arr2 = [1, 2, 3, 4];
// to delete the element at index 2 we use splice
arr2.splice(1, 1);
console.log(arr2); // [1,3,4]
console.log(arr2.length); // 3 -> bcoz splice() delete the element at that index

//* 8.
let a = "ilovejavascript";

let output = a.slice(0, 1) + " " + a.slice(1, 5) + " " + a.slice(5);
console.log(output); // Outputs: "i love javascript"

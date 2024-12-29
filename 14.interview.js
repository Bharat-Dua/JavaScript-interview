//* 1.
console.log("A" - 4); // NaN
console.log("bharat" + "13"); // 'bharat13'

//* 2.
console.log("2" + 2 + "2"); // '222'

//* 3.
console.log("2" + 2 - "2"); // 20

//* 4.
const a = {};
const b = { name: "bharat" };
const c = { name: "paras" };
a[b] = { name: "raj" };
a[c] = { name: "ishant" };
console.log(a[b]); // 'ishant'
/* in detail reason why it prints ishant:-
Concept Name:
This behavior is related to Object-to-String Coercion and how Objects as Property Keys work in JavaScript.

Key Concepts to Understand:
Objects as Property Keys:

In JavaScript, object property keys (like a[b]) are always strings (or symbols).
When you use a non-string value (like an object) as a property key, JavaScript coerces it to a string using the object's toString() method.
Default toString() for Objects:

By default, the toString() method for objects returns a string like [object Object].
Key Collision:

Since both b and c are objects, their default toString() result is the same: [object Object].
As a result, when you assign a[b] and then a[c], they overwrite each other because they have the same coerced key: [object Object].
Step-by-Step Breakdown:
1. Variable Declarations:

const a = {};
const b = { name: "bharat" };
const c = { name: "paras" };
a is an empty object: {}.
b and c are two distinct objects with their own name properties ("bharat" and "paras", respectively).
2. First Assignment (a[b]):

a[b] = { name: "raj" };
Here, b (an object) is used as a property key for a.
Since object property keys are coerced to strings, b is converted to "[object Object]" using the default toString() method.
The assignment creates this key-value pair in a:

a["[object Object]"] = { name: "raj" };
3. Second Assignment (a[c]):

a[c] = { name: "ishant" };
Similarly, c (another object) is used as a property key for a.
Just like b, c is coerced to "[object Object]".
This overwrites the previous value stored at a["[object Object]"]:

a["[object Object]"] = { name: "ishant" };
4. Logging the Value (console.log(a[b])):

console.log(a[b]);
Here, b is coerced to the string "[object Object]".

Since a["[object Object]"] was overwritten in the second assignment, the value stored is:

{ name: "ishant" }
Therefore, the output is:


{ name: "ishant" }
Behind the Scenes:
1. Default toString() Method:
All objects inherit the default toString() method from Object.prototype.
For plain objects, toString() returns the string "[object Object]".
2. Coercion of Object Keys:
When you use an object as a property key, JavaScript calls its toString() method to convert it into a string.
3. Key Collision:
Both b and c are distinct objects but have the same string representation ("[object Object]").
Since object property keys in JavaScript are strings, this causes a collision, and the value of the key gets overwritten.
The final answer is: { name: "ishant" }
*/

//* 5.
let x = 0,
  y = false;
console.log(x == y); // true
console.log(x === y); // false

//* 6.
console.log("a" / 3); // NaN

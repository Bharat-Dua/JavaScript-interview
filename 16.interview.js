//* 1.
let a = [2, 3, 4, 5][(1, 2)];
console.log(a); // 4

//* 2.
const obj = {
  1: "a",
  2: "b",
  2: "b",
  [1]: "c",
};
console.log(obj); // { 1: 'c', 2: 'b' }
/* Objects in JavaScript:

Objects in JavaScript store data as key-value pairs.
Keys are unique, and if the same key is defined multiple times, the last defined value for that key will overwrite any previous values.
Property Keys in Objects:

JavaScript object keys can be strings or symbols.
If you use a number as a key (e.g., 1), it is internally converted to a string (e.g., "1").
The same applies to computed property keys like [1]. The expression inside the brackets is evaluated, and the result is converted to a string.
Key Overwriting:

If a key is repeated in an object, JavaScript will overwrite earlier key-value pairs with the latest value for that key.
*/

//* 3.

let c = "abcd";
let b = "1234";

function merge(str1,str2){
    let str1Length= str1.length;
    let str2Length= str2.length;
    let length= Math.max(str1Length,str2Length);
    let result=""
    for(let i=0;i<length;i++){
        if(i<str1Length) result+=str1[i];
        if(i<str2Length) result+=str2[i];
        
    }
    return result;
}
console.log(merge(c,b)); // "a1b2c3d4"
//* 1.
let a = [3, 4, 5, 6];
a[6] = 77;
console.log(a); // [ 3, 4, 5, 6, <2 empty items>, 77 ]

//* 2.
let b = [..."bharat"];
console.log(b); // ['b', 'h', 'a', 'r', 'a', 't']  bcoz-> spread operator converts string into array

//* 3.
console.log(parseInt("10+2")); // 10  bcoz-> parseInt() function only extract the numeric part as it sees an non numeric value it ignores the rest and like here + is not a number so ignores the rest of the string. 10+2 is a string, so it only takes the first number which is 10. 2 is ignored. 10 is converted to integer and returned.
console.log(parseInt("7FM")); // 7
console.log(parseInt("MF3")); // NaN  bcoz-> here there is no numeric value so it returns NaN (Not a Number)

//* 4.
console.log(
  // [undefined,undefined] bcoz return statement is empty
  [1, 2].map((ele) => {
    if (ele > 0) return;
    return ele * 2;
  })
);

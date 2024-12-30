//* 1.
console.log(Array(4)); // [undefined,undefined,undefined,undefined] bcoz ->when we give single argument to array it will create array of that length :-
console.log(Array(6, 4)); // [6,4] -> bcoz ->when we give more than one argument it create an array of the elements of that length

//* 2.
console.log(Number.isNaN(NaN)); // true

//* 3.
if (NaN) {
  console.log("true");
} else {
  console.log("false"); // bcoz NaN is falsey value
}

//* 4.
function add(a, b) {
  if (b) {
    return a + b;
  } else {
    return function (b) {
      return a + b;
    };
  }
}
console.log(add(4)(5)); // 9
console.log(add(4, 5)); // 9

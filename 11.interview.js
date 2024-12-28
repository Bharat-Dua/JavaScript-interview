//* 1.

function abc(a, b, c = 2) {}
console.log(abc.length); // 2

//* 2.
function a(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(a(1)(2)(3)); // 6 -> currying example

//* 3.
// show each word on new line
let a = "bharat dua";
let b = a.replace(" ", "\n");
console.log(b); // bharat \n dua
// or
let a1 = "bharat dua";
let b1 = a1.split(" ");
b1.forEach((word) => console.log(word));

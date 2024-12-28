//* 1.
function checkAge(data) {
  console.log(typeof data);
  if (data === { age: 18 }) {
    console.log("you are an adult");
  } else if (data == { age: 18 }) {
    console.log("you are still an adult");
  } else {
    console.log("Hmm.. No age");
  }
}
console.log(checkAge({ age: 18 })); // outputs: "Hmm..No age" bcoz of object are reference type different memory location

//* 2.
function abc() {
  console.log(abc.timeout);
}
abc(); // undefined
abc.timeout = 200;
abc.timeout = 100;
abc(); // 100

//* 3.
let a = { name: "Adarsh" };
let z = a;
z.name = "Adil";
console.log(a.name); // Adil -> bcoz of same memory location

//* 4.
console.log(+true) // 1
console.log(!'hello') // false

//* 5.
console.log(isNaN("hi")) // true
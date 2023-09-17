// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}`;
console.log(greet("Alaa"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (a, b) => a + b;
console.log(sum(5, 6));
// Q3) Write a simple arrow function that squares a number.
const sqr = (num) => num * num;
console.log(sqr(2));
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const newArr = (arr) => {
  const arr2 = arr.map((x) => {
    return x * x;
  });
  return arr2;
};
a = [2, 6, 8, 9];
console.log(newArr(a));

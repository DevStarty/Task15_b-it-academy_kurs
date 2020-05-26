/*
  1. Create function 'findBiggestNuber' which takes one argument - array of numbers.
  It should return biggest number in array.
  2. Create function 'findFirstEvenNumber' which takes one argument - array of numbers.
  It should return first number in array, which is disivible by 2.
  3. Create function 'findFirstEvenPositiveNumber' which takes one argument - array of numbers.
  It should return first positive number in array, which is divisible by 2.
  4. Create function 'findPositiveNumbers' which takes one argument - array of numbers.
  It should return array of numbers which are non negative an not equal 0.
*/

const numbers = [1, 9, 5, 17, -10, 11, 16, 0];

function findBiggestNuber(e) {
  console.log(e);
} // findBiggestNuber
findBiggestNuber("Result of function findBiggestNumber is:");

function findBiggestNumber() {
  console.log(Math.max(...numbers));
}
findBiggestNumber();

// findFirstEvenNumber
findFirstEvenNumber("Result of function findFirstEvenNumber is:");
console.log(numbers.find((e) => e % 2 == 0));
function findFirstEvenNumber(e) {
  console.log(e);
}
findFirstEvenPositiveNumber(
  "Result of function findFirstEvenPositiveNumber is:"
);
console.log(numbers.find((e) => e % 2 == 0 && e > 0));

// findFirstEvenPositiveNumber
function findFirstEvenPositiveNumber(e) {
  console.log(e);
}

findPositiveNumbers("Result of function findPositiveNumbers is:");
// findPositiveNumbers
console.log(numbers.find((e) => e != 0 && e > 0));
function findPositiveNumbers(e) {
  console.log(e);
}

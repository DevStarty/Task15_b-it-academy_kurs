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

function findBiggestNumber(numbers) {
  var max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (max <= numbers[i]) {
      max = numbers[i];
    }
  }
  console.log(max);
  return max;
}

function findFirstEvenNumber(numbers) {
  return numbers.find((e) => e % 2 == 0);
}

function findFirstEvenPositiveNumber(numbers) {
  return numbers.find((e) => e % 2 == 0 && e > 0);
}

function findPositiveNumbers(numbers) {
  return numbers.find((e) => e != 0 && e > 0);
}

findBiggestNumber(numbers);
findPositiveNumbers(numbers);
findFirstEvenNumber(numbers);
findFirstEvenPositiveNumber(numbers);

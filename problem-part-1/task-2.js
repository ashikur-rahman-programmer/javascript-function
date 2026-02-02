/**
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0


 */

const numbers = [5, 6, 11, 12, 98, 5, 12];
function findRepNUm(arr, find) {
  let repNum = 0;

  for (const number of arr) {
    if (number === find) {
      repNum++;
    }
  }
  let result = `Find ${find} , output ${repNum}`;
  return result;
}
console.log(findRepNUm(numbers, 12));

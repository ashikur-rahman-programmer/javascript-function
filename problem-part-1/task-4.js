/**
 * Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming


 */

const str = "I am learning Programming to become a programmer";

function longWordFunc(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  let longestWords = `The longest words is ${longestWord}`;

  return longestWords;
}

console.log(longWordFunc(str));

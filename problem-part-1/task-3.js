/**
 * Task-3:
Write a function to count the number of vowels in a string.


 */
const str = "amar sonar bangla ami tomay valobashi";
function countNum(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  let vowelNum = `vowel numbers is ${count}`;
  return vowelNum;
}
console.log(countNum(str));

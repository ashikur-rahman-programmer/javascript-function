/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights = [167, 190, 120, 165, 137];
function lowestNum(numbers) {
  let lowNum = numbers[0];
  for (const number of numbers) {
    if (number < lowNum) {
      lowNum = number;
    }
  }
  return lowNum;
}

console.log(lowestNum(heights));

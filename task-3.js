/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
let fnds = [8, 24, 62, 12, 26];
function make_avg(arr, size) {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  let avg = sum / size;
  return avg;
}
console.log(make_avg(fnds, fnds.length));

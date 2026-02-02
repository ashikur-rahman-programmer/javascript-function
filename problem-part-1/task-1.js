/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
(0°C × 9/5) + 32 = 32°F



 */
function tempChange(num) {
  const fahrenheit = (num * 9) / 5 + 32;
  const result = `${num}°C = ${fahrenheit}F`;
  return result;
}

console.log(tempChange(20));

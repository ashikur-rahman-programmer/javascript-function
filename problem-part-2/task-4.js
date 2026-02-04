/**
 * Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

 */

/**
 * task holo :
 * phn er avg price ber korte hobe
 * 1st for loop chalaye alada korte hobe sokol element k
 * er por object theke price k ber korte hobe
 * sokol price er sum er sathe joto gula price ache division kore ber kore return korte hobe ...........
 *
 */

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(array) {
  let sum = 0;
  let count = 0;
  for (const arr of array) {
    if (arr.price) {
      sum += arr.price;
      count++;
    }
  }
  const result = sum / count;

  return Math.floor(result);
}

console.log(findAveragePhonePrice(phones));

/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


 */

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity,
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  // total quantity of product prices
  const laptopPrice = laptop * laptopQuantity;
  const tabletPrice = tablet * tabletQuantity;
  const mobilePrice = mobile * mobileQuantity;

  //  total price

  let totalPrice = laptopPrice + tabletPrice + mobilePrice;

  return totalPrice;
}

const result = calculateElectronicsBudget(1, 1, 1);
console.log("total price or amount required : ", result);

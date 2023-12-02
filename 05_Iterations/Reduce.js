// Reduce method is used to reduce an array to a single value.

const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and current val: ${currval}`);
    return acc + currval
}, 0)

const myTotal_01 = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal_01);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);        // 0 is the initial value of acc (accumulator)

console.log(priceToPay);

// const arr1 = [1,2,3,4,5,{key: 'value'}];
// // const a = arr1[0];
// // const b = arr1[1];
// // const c = arr1[5];

// const [a,b,c, ...rest] = arr1;
// console.log(rest);
const cart = [
  {
    label: "apples",
    price: 100,
    quantity: 2,
    // 200
  },
  {
    label: "bananas",
    price: 120,
    quantity: 3,
    // 360
  },
  {
    label: "lemons",
    price: 70,
    quantity: 5,
    // 350
  },
];
const totalAmount =  cart.reduce((acc, {price , quantity}) => acc + price * quantity, 0);
// const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity,0);
// const { label, price, quantity } = item;
console.log(totalAmount);

const mess = (mess) => {
  console.log(mess);
};
mess("Hello World");

const randomNum = (input) => {
  const random = Math.floor(Math.random() * 100) + 1;
  // console.log(random);
  if (input == random) {
    console.log("Ви вгадали число!");
  } else {
    console.log("Ви не вгадали число!");
  }
  if (input > 100) {
    console.log("Введіть число не більш 100");
    return input;
  }
};
// randomNum(prompt("Введіть число"));

//

// const applyCallbackToEachElement = (arr1 = [], callback) => {
//   const arr1Checked = [];
//   for (let el of arr1) {
//     const eled = callback(el);
//     if (eled) {
//       arr1Checked.push(el);
//     }
//   }
//   return arr1Checked;
// };

// const callback = (element) => {
//   return element >= 4;
// };

// const result = applyCallbackToEachElement([1, 2, 3, 4, 5], callback);
// console.log(result);
// applyCallbackToEachElement([1, 2, 3, 4, 5]);
// Я не знаю но вроде оно работает хоть и выдает ошибку

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * (discount / price));
  callback(discountedPrice);

};
const showDiscountPrice = (discountedPrice) => {
  console.log(`Vasha zena ${discountedPrice}`);
};
calculateDiscountedPrice(100, 10, showDiscountPrice);
console.log(showDiscountPrice);
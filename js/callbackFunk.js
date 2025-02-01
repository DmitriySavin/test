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
    };
    if (input > 100) {
        console.log('Введіть число не більш 100');
        return input;
    }

};
// randomNum(prompt("Введіть число"));

// 

const applyCallbackToEachElement = (arr, callback) => {

}

const arr = [1, 2, 3, 4, 5];
let squareCallback;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);
applyCallbackToEachElement()

// 

const calculateDiscountedPrice = (price, discount, callback) => {

}
let showDiscountPrice;
calculateDiscountedPrice(100, 10, showDiscountPrice);
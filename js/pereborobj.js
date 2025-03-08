// const user = {
//   mood: "happy",
// };
// user.hobby = "skydiving";
// user.premium = false;
// function numUser() {
//   let buffer = Object.keys(user);
//   for (const i of buffer) {
//     console.log(`${i} - ${user[i]}`);
//   }
// }
// numUser(user);

// //

// const hotel = {
//   name: "ivan",
//   stars: 5,
//   rooms: 150,
// };

// function countProps() {
//   let buff = Object.keys(hotel).length;
//   console.log(`${buff} - кількість властивостей`);
// }

// countProps();

// //

// const employees = {
//   ivan: 10,
//   dima: 7,
//   andrew: 12,
//   maks: 4,
// };

// function findBestEmployee() {
//   // const buff2 = Object.keys(employees);
//   // for(const key in employees) {
//   //   console.log(key)
//   // }
//   // const empValues = Math.max(...Object.values(employees));
//   const maxSalary = Math.max(...Object.values(employees));
//   const maxEmployes = Object.entries(employees).find(
//     ([_, salary]) => salary === maxSalary
//   );
//   console.log(maxEmployes);
// }
// findBestEmployee();
// //

// const employees2 = {
//   ivan: 2000,
//   dima: 2200,
//   andrew: 1250,
//   maks: 4000,
// };

// function countTotalSalary() {}
// const salaries = Object.values(employees2);
// let buffer2 = 0;
// for (const salary of salaries) {
//   buffer2 = buffer2 + +salary;
// }
// console.log(buffer2);
// countTotalSalary();
// // Не совсем понял суть задания , так что не уверен что правильно
// //

const arr = [
  {
    name: "akura",
    price: 150 ,
  },
  {
    name: "ruma",
    price: 111,
  },
  {
    name: "kura",
    price:160 ,
  },
];

function getAllPropValues(arr, prop) {
const propValues = [];
for (const obj of arr) {
console.log(obj);
if (obj.hasOwnProperty(prop)) {
console.log(obj[prop]);
propValues.push(obj[prop]);
}
};
return propValues;
};
console.log(getAllPropValues(arr, 'name'));
console.log(getAllPropValues(arr, 'price'));
//

const allProdcuts = [
  {
    productName: 'banan',
    price: 40,
    quantity: 25,
  },
  {
    productName: 'apelsin',
    price: 50,
    quantity: 18,
  },
  {
    productName: 'mango',
    price: 60,
    quantity: 10,
  },
];

function calculateTotalPrice(allProdcuts, productName) {
  const calTotPrice = allProdcuts.reduce((acc, {price , quantity}) => acc + price * quantity, 0);
  console.log(calTotPrice);
};

calculateTotalPrice(allProdcuts, 'price', 'quantity');

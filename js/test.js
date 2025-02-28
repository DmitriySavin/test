const filter = function (array, callback) {
  const filteredData = [];
  for (const filterItem of array) {
    const filteredItem = callback(filterItem);
    if (filteredItem) {
      filteredData.push(filteredItem);
    }
  }
  return filteredData;
};
const callback = function (element) {
  return element >= 5;
};
const result = filter([3, 6, 9, 12], callback);
console.log(result);

//

const man = {
  name: "dima",
  height: 180,
  age: 16,
  colorOfScin: "yellow",
  lastname: "sav",
  IQ: 140,
};
{
}
console.log(man.age);
console.log(man.name);
// console.log(man.lastname);
// console.log(man.height);
////
console.log(man["name"]);
function getValue(obj, keyName) {
  console.log(obj[keyName]);
}
console.log(man, "height");
man.width = "80kg";
man["Dev"] = "frontend";
man["name"] = "Nikita";

man.location = {
  country: "Ukraine",
  city: "odessa",
  street: "zentralna",
};
delete man.name;

const dateOfBirth = 15;
const yearOfBirth = 2000;

// console.log(userInfo)
// Обчислювальни властывости обьекта

const monthOfBirth = "May";
const numberOfMonth = 5;

const userInfo = {
  dateOfBirth,
  yearOfBirth,
};

// const copyuserinfo = userInfo;

const copyuserinfo = Object.assign({}, userInfo);

// Цикл For...in
// Методы Object.keys(), obj.values(), obj.entries()
// Операция spread

// const dog = {
//   color: white,
//   height: 15,
//   weight: 5,
//   ears: 2,
//   eyes: 2,
//   legs: 4,
//   tail: true,
// };
// for( const key in dog) {
//     console.log(key);
// };
// Перебирает каждый ключ обьекта dog
const dimasDog = Object.create(dog);
dimasDog.color = "orange";
dimasDog.name = "Richard";
dimasDog.height = 30;

for (const key in dimasDog) {
  if (dimasDog.hasOwnProperty()) {
    console.log(key);
  }
}

const team = {
  name: "barcelona",
  members: 20,
  city: "Madrid",
};
const newTeam = Object.create(team);
newTeam.name = "Girona";
newTeam.cuntry = "Spain";
newTeam.city = "Girona";
newTeam.uaPlayers = 2;

for (const key in newTeam) {
  if (newTeam.hasOwnProperty(key)) {
    console.log(key);
  }
  // if(!newTeam.hasOwnProperty(key)) {
  //     console.log(key);
  // }
}
//  Object.keys()
const dog = {
  color: white,
  height: 15,
  weight: 5,
  ears: 2,
  eyes: 2,
  legs: 4,
  tail: true,
};

const property = Object.keys(dog);
const values = Object.values(dog);
const entries = Object.entries(dog);

//

const laptop = {
  color: "red",
  brand: "Asus",
  year: 2000,
  weight: 3,
};
const keys = Object.keys(laptop);
for (const key of keys) {
  console.log(`${key}: ${laptop[key]}`);
}

const salaries = {
  js: 2000,
  java: 1500,
  python: 1750,
};
const value2 = Object.values(salaries);
let buff;
for (const el of value2) {
  buff = buff + el;
  console.log(value2);
}
const numbers = [1, 2, 3, 4];
const maxNumber = Math.max(numbers);

// //

// const a = {x: 1, y: 3};
// const b = {y: 2, c: 3};

// const c = {
//   ...b,
//   ...a
// };

const hotel = {
  hotelName: "Hilton",
  stars: 5,
  rooms: 250,
  minPrice: 300,
  maxPrice: 5000,
  countries: 56,
};
const hotelIn = hotel.hotelName;
const { hotelName, stars, minPrice, maxPrice, countries } = hotel;
//
const motorcycle = {
  color: "blue",
  engine: 2,
  seats: 3,
  horsepower: 30,
};
// const {color,engine, seats, horsepower} = motorcycle;

const snowboard = {
  color: "red",
  print: "tank",
  height: 1.2,
  weight: 3,
};

// const {color: ColorBoard, print, height, weight, material = 'tree'} = snowboard;

const frog = {
  color: "green",
  weight: 0.5,
  isSwim: true,
  isJump: true,
};
// const {color,weight,isJump,isSwim} = frog;
const { color, weight, ...rest } = frog;
console.log(color);
console.log(weight);
console.log(rest); // obj = isswim,isjump;

const hotel5 = {
  hotelNamel: "Japan",
  stars: 5,
  capasity: 200,
  rooms: {
    sizes: {
      small: 25,
      medium: 30,
      big: 145,
    },
  },
}; 
// const {small,medium,big} = hotel.rooms.sizes;
// const {sizes, ...others} = hotel;
// const {sizes {small,medium,big} } = hotel.rooms;


//  //  //  //  //
// императивный код
const numbers1 = [1,2,3,4,5];
// const arr2 = [];
// for (let i = 0; i < numbers1.lenght; i++) {
//   if(numbers[i] > 5) {
//     arr2.push(numbers1[i]);
//   }
// }

// декларативный код
const newNumbers = numbers1.filter(item => item > 5);
// filter - перебор массива

// чистые функции;

const numbers3 = [1,2,3,4,5,6];
const dirtyFunction = (array, value) => {
  for(let i = 0; i < array.lenght; i++) {
    console.log(array[i]);
    array[i] = array[i] * value;
  }
  return array;
}
console.log(dirtyFunction(numbers,2));
// const result1 = dirtyFunction(numbers, 2);
// const result2 = dirtyFunction(numbers)

const clearFunction = (array, value) => {
  const copyArray = [];
  for(let i = 0; i < array.lenght; i++) {
 copyArray.push(array[i] * value) ;
  }
  return copyArray;
};
const result3 = clearFunction(numbers, 2);
const result4 = clearFunction(numbers, 3);

//  ForEach

// const names = ['Arhtur', 'Dima', 'Anton', 'Artem', 'Vasya', 'Nikita'];
// for (let i = 0; i < names.lenght; i++) {
//   console.log(`${i + 1} - ${names[i]}`);
// }
// names.forEach(function(item, index) {
//   console.log(`${index + 1} - ${item}`);
// })
names.forEach((item,index) => console.log(`${index + 1} - ${item}`));

// map

const prices = [50,100,150,200,250];
// const newPrices = [];
// for(const price of prices) {
// newPrices.push(price * 0.7);
// }

const newPrices = prices.map(price => price * 0.7);
console.log(newPrices);
const inventors = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    passed: 1955,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    passed: 1727,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    passed: 1642,
  }
];
const names = inventors.map(inventor => inventors.name);

// filter

const numbers2 = [1,2,3,4,5,6,7,8,9,0];
const num2 = numbers2.filter(num => num > 5);
console.log(num2);

//                  // .isActive

const numbers5 = [1,2,3,4,5,-6];
const positiveNumbers = numbers5.filter(number => number > 0);

// find

const numb1 = [1,2,3,4,5,6];
const positnumb1 = numb1.find(num => num < 5);

// every && come
const numb2 = [1,2,3,4,5,6];
const positnumb2 = numb1.every(num => num < 5);

const numb3 = [1,2,3,4,5,6];
const positnumb3 = numb1.some(num => num < 5);

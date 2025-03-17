const age = 15;
console.log(age);

const name = "dima";
console.log(name);

const isStudent = false;
console.log(isStudent);

const myString = "жизнь коротка";
console.log(myString);

let myNumber = 15;
myNumber = myNumber + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

// Моя версия была
// const msg = "Вітаю";
// prompt("Введіть ваше ім'я");
// console.log(prompt(msg));

// Когда поискал
const userName = prompt("Введіть ваше ім’я:");
if (userName) {
  console.log(`Привіт, ${userName}! Радий вас бачити.`);
} else {
  console.log("Ви не ввели ім’я.");
}

// Моя версия была
// const input = "Дякую за підтвердження!";
// confirm("Підтвердження дії");
// console.log(input);

// Когда поискал
const userResponse = confirm("Ви підтверджуєте свою дію?");
if (userResponse) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}
// НУ мы такого не учили но я не знаю как это сделать, в целом я суть понял практически , через UserResponce мы обращаемся к ответу пользователя и if это если да тк да идет первее чем нет (так же обращаясь к userresp), else это в случае нет ведь оно идет вторым

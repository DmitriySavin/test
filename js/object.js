// const bankAcount = {
//     ownerName: 'Dima',
//      accountNumber: 10,
//       balance: 1000
// };

// bankAcount.deposit = function(balance) {
//     if(balance === undefined) {
//         this.balance = bankAcount.balance;
//     };
//     this.balance += +balance;
//     alert(`Залышок на рахунку ${this.balance}`);
// };

// bankAcount.deposit(prompt('закинуть'));

// bankAcount.withdraw = function(balance) {
//     if(balance === undefined) {
//         this.balance = bankAcount.balance;
//     };
//     this.balance = balance - this.balance;
//     alert(`Залышок на рахунку ${this.balance}`);
// };
// bankAcount.withdraw(prompt('Снять'));
// console.log(bankAcount);
//

// const weather = {
//   temperature: -100,
//   humidity: '15%',
//   windSpeed: '20м/с'
// };

// weather.degreesCelsius = function () {
//   if (this.temperature < 0) {
//     alert('температура нижче 0 градусів Цельсія');
//     console.log(true);
//   } else {
//     alert('температура вище 0 градусів Цельсія');
//     console.log(false);
//   }
// };
// weather.degreesCelsius();
// // 

// const user = {
//     name: 'Dima',
//     email: 'Dima@gmail.com',
//     password: 'Dima2121212'
// };
// user.login = function () {
//   if (this.password.length > 4 && this.password.length < 16 && this.email.includes('@')) {
//     return true;
//   } else {
//     return false;
//   };
// };
// console.log(user.login())
// 

const movie = {
    title: 'horror',
    director: 'Mr',
    year: 2014,
    rating: 3.7
};
movie.ratinCheck = function() {
  if (this.rating < 8) {
    alert(`рейтинг фильма ${this.rating}`);
    console.log(false);
  } else {
    alert(`рейтинг фильма ${this.rating}`);
    console.log(true);
  }
};
movie.ratinCheck()
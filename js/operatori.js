// const x = 7;
// const y = 5;
// console.log(x + y);
// let value = 5;
// value += 10;
// console.log(value);
// const hello = 'hello';
// console.log('hello' === 'hello');
const valueA = '5';
console.log(Number(valueA));
console.log(typeof Number(valueA));

const valueB = 'five';
console.log(Number(valueB));
// console.log(typeof Number(valueB));

console.log(Number.parseFloat('2.5px'));
// 
const validNumber = Number('52');
console.log(Number.isNaN(validNumber));

const invalidNumber = Number('abg');
console.log(Number.isNaN(invalidNumber));
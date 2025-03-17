const a = [1, 2, 3];
a[1] = 5;
console.log(a)
// 
const string = ['a', 'b', 'c'];
string.length = 3;
string[3] = 'd';
console.log(string); 
// 
const num = [10, 35, 46, 57];
let res = 0;
for (let number of num) {
    res = res + number;
}
console.log(res);
//
const arr = [1, 2, 3, 4, 5];
for (let array of arr) {
    console.log(array)
}
//
const arr2 = ['apple', 'banana', 'Orange', 'Pear', 'Lemon'];
for (let array2 of arr2) {
    if (array2.length > 5) {
console.log(array2)
    }
}
// 
const arr3 = [1, 2, 3, 45, 5, 6, 7, 86, 9, 10];
    console.log(Math.max(...arr3))

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let array4 of arr4) {
    if (array4 % 2 === 0) {
        console.log(array4)
    }
}











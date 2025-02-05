const filter = function (array, callback) {
    const filteredData = [];
    for (const filterItem of array) {
        const filteredItem = callback(filterItem);
        if (filteredItem) {
            filteredData.push(filteredItem)
        }
    }
    return filteredData;
}
const callback = function (element) {
    return element >= 5;
}
const result = filter([3, 6, 9, 12], callback);
console.log(result);

// 

const man = {
    name: "dima",
    height: 180,
    age: 16,
    colorOfScin: 'yellow',
    lastname: 'sav',
    IQ: 140,
}
{

};
console.log(man.age);
console.log(man.name);
// console.log(man.lastname);
// console.log(man.height);
////
console.log(man['name']);
function getValue(obj, keyName) {
console.log(obj[keyName]);
}
console.log(man, 'height');
man.width = '80kg';
man['Dev'] = 'frontend';
man['name'] = 'Nikita';

man.location = {
    country: 'Ukraine',
    city: 'odessa',
    street: 'zentralna'
}
delete man.name;

const dateOfBirth = 15;
const yearOfBirth = 2000;

const userInfo = {
    dateOfBirth,
    yearOfBirth,

};
console.log(userInfo)
const friends = ['Mango', 'Poly', 'Kivi', 'Ajax'];
for (let a = 1; a <= friends.length; a++) {
    console.log(friends.slice(0, a).join(', '))
}
// Как же сложно было понять это


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

cards.indexOf('Карточка-3');
console.log(cards.indexOf('Карточка-3'));
cards.splice(2, 1);
console.log(cards);


cards.splice(4, 0, 'Карточка-6');
console.log(cards);


cards.indexOf('Карточка-4');
console.log(cards.indexOf('Карточка-4'));
cards.splice(2, 1, 'Карта-4');
console.log(cards);
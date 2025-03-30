// Dom Поиск елементов
const itElement = document.querySelector('p');
console.log(itElement);

const realRef = document.querySelector('#java')
console.log(realRef);

const jsRef = document.querySelector('.javascript')
console.log(jsRef);
console.log(jsRef.tagName);
 
const lolRef = document.querySelector('[title="hello"]');
console.log(lolRef.textContent)

const paragrafs = document.querySelectorAll('p');
console.log(paragrafs);
paragrafs.forEach(paragraf => {
    console.log(paragraf);
});
// getElementById

const realRef1 = document.getElementById('java');
console.log(realRef1);
console.log(realRef1.outerText);



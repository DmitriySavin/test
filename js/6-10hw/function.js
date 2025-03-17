function logItems(array = ["Mango", "Poly", "Ajax"]) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems();

function calculateEngravingPrice(message, pricePerWord) {
  // Разбиваем строку на слова, используя пробел в качестве разделителя
  const words = message.split(" ");
  let buff = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      buff++;
    }
  }

  return buff * pricePerWord;
  //const foundArray = words.filter((el) => el !== '');
  //return foundArray * pricePerWord;
}
const pricePerWord = 10;
const message = "Меня зовут Дима   ";
console.log(calculateEngravingPrice(message, pricePerWord));

function findLongestWord(message) {
  if (message === undefined) {
    console.log("ВВедите");
    return;
  }

  const words = message.split(" ");
  let buff = "";
  for (let i = 0; i < words.length; i++) {
    const el = words[i];
    if (el.length > buff.length) {
      buff = el;
    }
  }
  console.log(buff);
}

findLongestWord("Привет меня зовут   Дима");

function formatString(msg) {
  if (msg == undefined) {
    console.log(0);
    return;
  }
  if (msg.length < 40) {
    console.log(msg);
  } else {
    console.log(msg.substring(0, 40) + "...");
  }
}

formatString("fhsxcxcdjskghsgdfgdfgdfgdgdgdgfdfdgdfgfhsdfsdf");

function checkForSpam(message) {
  const array = message.split(" ");
  if (message.includes("span")) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkForSpam("Меня зовут дима span");

// function promtNumArr(num) {
// let input = prompt('Введіть число');
// const numbers = [];
// let total = 0;
// }

// promtNumArr()

// function splitMe(message, splitter) {
//     const arr = new Array();
//     let buffer = '';
//     let buffCounter = 0;
//     for (let i = 0; i < message.length; i++ ) {
//         const text = message[i];

//         if (text !== splitter) {
//             buffer += text;
//             continue;
//         }
//             arr[buffCounter] = buffer;
//             buffer = '';
//             buffCounter++;

//     }

//     if (buffer !== undefined) {
//         arr[arr.length] = buffer;
//      }
//     return arr;
// }

function showPromt() {
  const numbers = [];
  let total = 0;

  while (true) {
    let input = prompt("введіть число");

    if (input == "") {
      continue;
    }

    if (input == null) {
      for (let num of numbers) {
        total = total + +num;
      }
      break;
    }

    if (!isNaN(input)) {
      numbers.push(input);
    } else {
      alert("Not a number");
    }
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
showPromt();

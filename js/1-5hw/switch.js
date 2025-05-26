const mess = prompt('Шо будете пити: кава , чай  , сік');
let drink;
switch (mess) {
    case 'кава':
        console.log('Ви вибрали каву');
        break
    case 'чай':
        console.log('Ви вибрали чай');
        break
    case 'сік':
        console.log('Ви вибрали сік');
        break
    default:
        console.log('Виберіть правильну відповідь');
};

const days = prompt("Виберіть день неділі: понеділок, вівторок, середа, четвер, п'ятниця, субота, неділя.");
let day;
switch (days) {
    case 'понеділок':
        console.log('Це робочий день.');
        break
    case 'вівторок':
        console.log('Це робочий день.');
        break
    case 'середа':
        console.log('Це робочий день.');
        break
      case 'четвер':
        console.log('Це робочий день.');
        break
      case "п'ятниця":
        console.log('Це робочий день.');
        break
      case 'субота':
        console.log('Це вихідний.');
        break
      case 'неділя':
        console.log('Це вихідний.');
        break
    default:
        console.log('Укажіть день тижня.');
};

const Question = prompt("Оберіть місяць");
let Season;

switch (Question) {
  case "грудень":
  case "січень":
  case "лютий":
    console.log("Це зима");
    break;
 case "березень":
  case "квітень":
  case "травень":
    console.log("Це весна");
    break;
 case "червень":
  case "липень":
  case "серпень":
    console.log("Це літо");
        break;
     case "вересень":
  case "жовтень":
  case "листопад":
    console.log("Це осінь");
    break;
  default:
    console.log("Укажіть місяць.");
}

const QuestionNum = prompt("Оберіть місяць");
let numbers;
switch (QuestionNum) {
  case "грудень":
  case "січень":
  case "березень":
  case "травень":
  case "липень":
  case "серпень":
  case "жовтень":
    console.log("У цьому місяці 31 день.");
    break;
  case "квітень":
  case "червень":
  case "вересень":
  case "листопад":
    console.log("У цьому місяці 30 днів.");
    break;
  case "лютий":
    console.log("У цьому місяці 28 - 29 днів.");
    break;
  default:
    console.log("Укажіть місяць.");
};

const color = prompt('"червоний", "зелений", "жовтий"')
let choice;
switch (color) {
    case 'червоний':
        console.log('стоп');
        break
    case 'зелений':
        console.log('йти');
        break
    case 'жовтий':
        console.log('чекати');
        break
    default:
        console.log('Виберіть кольор');
};


let num1 = prompt('число 1');
let num2 = prompt('число 2');
let result; 
const operators = prompt('виберіть оператора: "+", "-", "*", "/"');
switch(operators) {
    case "+":
        result = (+num1 + +num2);
        alert(result);
        
        break
    case "-":
        result = num1 - num2;
        alert(result);
        break
    case "*":
        result = num1 * num2;
        alert(result);
        break
    case "/":
       result = num1 / num2;
        alert(result);
        break
    default:
        console.log("виберіть оператора.")
};

const a = 'Hello';
const b = 'hi';
if (a.length > 0 && b.length > 0) {
    console.log("Обидва поля заповнені")
} else {
   console.log("Не всі поля заповнені") 
};

const x = 5;
const y = 5;
if (x + y >= 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

const z = "JavaScript";
if (z.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

const f = 16;
if (f > 10 && f < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const n = "dima";
if (n.length > 3) {
  console.log("ОК");
} else {
  console.log('Ім"Я повинно містити не менше 3 символів');
}

const e = "dimasav@.com";
if (e.includes("@.")) {
  console.log("OK");
} else {
  console.log("Email Повинен містити '@.'!");
}

const p = "dimasav";
if (p.length > 6) {
  console.log("ОК");
} else {
  console.log("Пароль повинен бути не менш 6 символів");
}

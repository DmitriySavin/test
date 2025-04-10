const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
//   делаем кнопку
const option = colorPickerOptions[0];
const button1 = document.createElement("button");
button1.type = "button";
button1.textContent = option.label;
// button1.textContent = option.color;
button1.style.backgroundColor = option.color;

// collections btn

// const colorPeckerWrappers = document.querySelector('.js-color-picker');
// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i++) {
//   const option = colorPickerOptions[i];

//   // const option = colorPickerOptions[0];
//   const button1 = document.createElement("button");
//   button1.type = "button";
//   button1.textContent = option.label;
//   button1.classList.add('.color-picker');
//   button1.style.backgroundColor = option.color;
//   elements.push(button1);
// };

// colorPeckerWrappers.append(...elements);

// Map

const elements = colorPickerOptions.map((option) => {
  const button1 = document.createElement("button");
  button1.type = "button";
  button1.textContent = option.label;
  button1.classList.add(".color-picker");
  button1.style.backgroundColor = option.color;
  return button1;
});
console.log(elements);
console.log(...elements);
colorPickerOptions.append(...elements);

const makeColorPickerOptions = options => {
    return options.map(option => {
        const button1 = document.createElement("button");
        button1.type = "button";
        button1.textContent = option.label;
        button1.classList.add(".color-picker");
        button1.style.backgroundColor = option.color;
        return button1;
    })
};
const elementsMerkup = makeColorPickerOptions(colorPickerOptions);
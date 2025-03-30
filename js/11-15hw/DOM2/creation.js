// Ставорення елементив
const titleEl = document.createElement("h1");
titleEl.textContent = "sldlsdd";
titleEl.classList.add("white");
document.body.appendChild(titleEl);

const imageElement = document.createElement("img");
imageElement.src =
  "https://i.pinimg.com/474x/f0/1b/40/f01b408a37a1f21da48d2f64e524641f.jpg";
imageElement.alt = "black eye";
imageElement.width = 300;
imageElement.height = 200;
document.body.appendChild(imageElement);
console.log(imageElement);

// удаление елемента 

titleEl.remove()

// Створення параграфа
const containerEl = document.querySelector(".container");
containerEl.appendChild(titleEl);
containerEl.appendChild(imageElement);

// Створення нового елемента списка
const navLinkEl = document.createElement("a");
navLinkEl.textContent = "Prices";
navLinkEl.href = "#";
const navItemEl = document.createElement("li");
navItemEl.appendChild("navLinkEl");
const menuEl = document.querySelector(".menu");
menuEl.appendChild(navItemEl);

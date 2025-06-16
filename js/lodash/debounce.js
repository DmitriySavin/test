const jsInput = document.querySelector('.js-input');
const jsOutput = document.querySelector('.js-output');

let inputInvoukeCounter = 0;

// jsInput.addEventListener('input', onInputChange);
jsInput.addEventListener('input', _.debounce(onInputChange, 2000));

function onInputChange(event) {
    inputInvoukeCounter += 1;
    jsOutput.textContent = `Кількість викликів функціі: ${inputInvoukeCounter} значення інпута: ${event.target.value}`;

}
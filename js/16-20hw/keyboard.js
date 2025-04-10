const refs = {
    clearBtn: document.querySelector('.js-clear'),
    output: document.querySelector('.js-output'),
};
window.addEventListener('keydown', onKeyPress);

refs.clearBtn.addEventListener('click', onClearOutput);
function onClearOutput() {
    refs.output.textContent = '';
}

function onKeyPress(event) {
// console.log(event);
console.log(event.key);
// console.log(event.code);

refs.output.textContent += event.key
};
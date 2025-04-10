const refs = {
    input: document.querySelector('.input'),
    nameLabel: document.querySelector('.input'),
    button: document.querySelector('.input'),
    licenceCheckBox: document.querySelector('.input'),
};
refs.input.addEventListener('input', onFormSubmit);
function onInputSubmit(event) {
    console.log(event.currentTarget.value);
}
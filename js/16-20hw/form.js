const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
console.log(event.currentTarget.elements.email.value);
const formElement = event.currentTarget.elements;
const mail = formElement.email.value;
const password = formElement.password.value;
const subScription = formElement.subScription.value;

// const formData = {
//     email: mail,
//     password: password,
//     subScription: subScription,
// }
const formData = new FormData(event.currentTarget);
formData.forEach((value , name) => {
 console.log()
})
   
};


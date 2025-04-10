const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('Нажатие')
// })
function onTargetBtnClick() {
    console.log('Нажатие')
}

targetBtn.addEventListener('click', () => {
    console.log('добав слух подий');
  targetBtn.addEventListener('click', onTargetBtnClick)
});

addListenerBtn.addEventListener('click', () => {
    console.log('aa');
    targetBtn.addEventListener('click', onTargetBtnClick)
})


removeListenerBtn.addEventListener('click', () => {
 targetBtn.removeEventListener('click', () => {
    console.log('зминюю слух подий');
 })
});
// targetBtn.removeEventListener('click', handClick => {}) 
// targetBtn.removeEventListener('click', () => {})


// Плохое название 

// function handClick() {
//     console.log('Нажатие')
// }
// // HandleSubjectEvent
// function handleTargetBtnClick() {
//     console.log('Нажатие')
// }
// // subjectEventHandler
// function targentBtnClickHandler() {
//     console.log('Нажатие')
// }
// onSubjectEvent

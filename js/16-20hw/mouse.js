const boxRefs = document.querySelector('.js-box');
boxRefs.addEventListener("mouseover", onMouseEnter);
boxRefs.addEventListener("mouseover", onMouseLeave);
boxRefs.addEventListener('mouseover', onMouseMove)

function onMouseEnter(event) {
    // console.log(event.currentTarget);
    console.log(event.target);
    boxRefs.classList.add('.box--active')
};

function onMouseLeave(event) {
    console.log(event.target);
    boxRefs.classList.remove('.box--active')
};

function onMouseMove(event) {
console.log(event)
}
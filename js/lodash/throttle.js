const coordsOutputRefs = document.querySelector('.js-coords');

window.addEventListener('mousemove', _.throttle(onMouseMove, 1000));

let mouseMoveCounter = 0;

function onMouseMove(event) {
    mouseMoveCounter += 1;
    console.log(coordsOutputRefs.textContent)
    coordsOutputRefs.textContent = `Кількість викликів функціі: ${mouseMoveCounter}, 
    X: ${event.clientX}
    Y: ${event.clientY}
    `;
}
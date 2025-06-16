const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoad);
})

function onImageLoad(event) {
    event.target.classList.add('appear');
}

// console.log(lazyImages);

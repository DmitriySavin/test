if ('loading' in HTMLImageElement.prototype) {
    addSrcAtrToLazyImages();
} else {
    addLazySizesScript();
}

function addSrcAtrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    console.log(lazyImages);
    lazyImages.forEach(image => {
        image.src = img.dataset.src;
        console.log(img.dataset.src)
    });
}



function addLazySizesScript() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    document.body.appendChild.script;
};

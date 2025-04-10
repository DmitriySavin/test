const titleElement = document.querySelector('.title');
console.log(titleElement.innerHTML);
titleElement.innerHTML = 'this is a new title';
titleElement.innerHTML = '<span>This is a new title</span>';
titleElement.insertAdjacentElement('beforeend', '<p>amf beforeend</p>')
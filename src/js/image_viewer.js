import '../css/image_viewer.css'; // non js files need extension

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);
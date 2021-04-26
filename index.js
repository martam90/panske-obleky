'use strict';

console.log('funguju');

const whiteBtn = document.querySelector('.white');
const blackBtn = document.querySelector('.black');
const redBtn = document.querySelector('.red');
const blueBtn = document.querySelector('.blue');

const shirt = document.querySelector('#product-image');

whiteBtn.addEventListener('click', () => {
  shirt.style.fill = 'white';
});

blackBtn.addEventListener('click', () => {
  shirt.style.fill = 'black';
});

redBtn.addEventListener('click', () => {
  shirt.style.fill = 'red';
});

blueBtn.addEventListener('click', () => {
  shirt.style.fill = 'lightblue';
});

import {generateContent} from './getData.js';

const button = document.querySelector('.img-upload__label');
button.onclick = function() {
  generateContent(25);
};

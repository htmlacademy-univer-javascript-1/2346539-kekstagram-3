/* eslint-disable no-use-before-define */

const successButtonListener = (event) => {
  if (event.key === 'Escape') {
    hideSuccessMessage();
    document.removeEventListener('keydown', successButtonListener);
  }
};

const errorButtonListener  = (event) => {
  if (event.key === 'Escape') {
    hideErrorMessage();
    document.removeEventListener('keydown', errorButtonListener);
  }
};

const hideErrorMessage = () => {
  const errorMessage = document.querySelector('.errorMessage');
  document.querySelector('body').removeChild(errorMessage);
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};


const hideSuccessMessage = () => {
  const message = document.querySelector('.success');
  document.querySelector('body').removeChild(message);
  document.removeEventListener('keydown', successButtonListener);
};

const showErrorMessage = () => {
  const temp = document.querySelector('#error');
  const clone = temp.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.error__button')
    .addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', errorButtonListener);
};

const showSuccessMessage = () => {
  const temp = document.querySelector('#success');
  const clone = temp.content.cloneNode(true);
  document.querySelector('body').append(clone);
  document
    .querySelector('.success__button')
    .addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', successButtonListener);
};

export {showErrorMessage, showSuccessMessage};

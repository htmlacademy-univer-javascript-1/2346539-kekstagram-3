const imageForm = document.querySelector('.img-upload__form');
const radioButtons = document.querySelectorAll('.effects__radio');
const imagePreview = imageForm.querySelector('.img-upload__preview img');

const removeFilter = (evt) => {
  evt.preventDefault();
  imagePreview.classList = [];
};

const addFilter = (evt) => {
  evt.preventDefault();
  removeFilter(evt);
  imagePreview.classList.add(`effects__preview--${evt.target.value}`);
};

const addListener = (element) => {
  if (element.value === 'none') {
    element.addEventListener('click', removeFilter);
  } else {
    element.addEventListener('click', addFilter);
  }
};

const setup = () => {
  radioButtons.forEach((element) => addListener(element));
};

const remove = () => {
  radioButtons.forEach((element) => {
    if (element.value === 'none') {
      element.removeEventListener('click', removeFilter);
    } else {
      element.removeEventListener('click', addFilter);
    }
  });
};

export {setup, remove};

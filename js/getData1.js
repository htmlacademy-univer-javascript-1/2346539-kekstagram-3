import { showErrorFetch } from './error.js';
import { closeEditWindow } from './form.js';
import { showErrorMessage, showSuccessMessage } from './messages.js';
import { showPictureFrom } from './createPicture.js';


function get () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => showPictureFrom(response))
    .catch(() => showErrorFetch());
}

const send = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response) {
        showSuccessMessage();
        closeEditWindow(true);
      } else {
        showErrorMessage();
        closeEditWindow(false);
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {send, get};

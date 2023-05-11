function getRandomInt(from, to) {
    return Math.floor(from + Math.random() * (to - from));
  }

  function checkCommentLength(string, Length) {
    if(string.length <= Length) {
      return true;
    } else {
      return false;
    }
  }

  const button = document.querySelector('.img-upload__label');
  button.onclick = function() {
    getRandomInt(1, 10);
    checkCommentLength('sdgs', 3);
  };

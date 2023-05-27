import { randomNumber } from './util.js';

const createObject = (number) => ({
  id: number,
  url: `photos/${number}.jpg`,
  description: `This is my ${number} post`,
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200)
});

function createArray (number) {
  const arrayOfObjects = [];
  for (let k = 0; k < number; k++) {
    arrayOfObjects.push(createObject(k+1));
  }
  return arrayOfObjects;
}

export {createArray};

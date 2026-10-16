'use strict';

const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const generateKey = (length, characters) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    key += characters[index];
  }
  return key;
};

const characters = 'jhhfgrrgrdg5yz05364tfsf78fgad9';
const key = generateKey(38, characters);
console.log(key);

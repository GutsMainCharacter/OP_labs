'use strict';

const phoneBook = {
  'Marcus Aurelius': '+380445554433',
  'psychiatric hospital': '+380442938539',
  'Prison': '+380676508332',
};

const findPhoneByName = (name) => phoneBook[name];

console.log(findPhoneByName('Prison'));
console.log(findPhoneByName('Kakashka'));

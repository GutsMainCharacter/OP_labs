'use strict';

const phoneBook = [
  { name: 'psychiatric hospital', phone: '+380442938539' },
  { name: 'VitalikButerin', phone: '+16474704570' },
  { name: 'mobilization', phone: '+380444561205' },
];

const findPhoneByName = (name) => {
  let phone;
  for (const person of phoneBook) {
    if (person.name === name) {
      phone = person.phone;
      break;
    }
  }
  return phone;
};

console.log(findPhoneByName('mobilization'));
console.log(findPhoneByName('Illia'));

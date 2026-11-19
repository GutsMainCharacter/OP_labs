'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const numbers = [10, 20, 30, 40, 50];
removeElement(numbers, 30);
console.log(numbers);

const cities = ['Lviv', 'Odesa', 'Kharkiv', 'Dnipro'];
removeElement(cities, 'Odesa');
removeElement(cities, 'Paris');
console.log(cities);

module.exports = { removeElement };
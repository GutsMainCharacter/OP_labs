'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

const numbers = [4, 8, 15, 16, 23, 42];
removeElements(numbers, 15, 4, 42);
console.log(numbers);

const fruits = ['apple', 'pear', 'plum', 'cherry'];
removeElements(fruits, 'plum', 'mango', 'apple');
console.log(fruits);

module.exports = { removeElements };
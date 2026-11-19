'use strict';

const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(unique([5, 3, 5, 3, 9, 1, 9])); 
console.log(unique(['red', 'blue', 'red', 'green', 'blue']));

module.exports = { unique };
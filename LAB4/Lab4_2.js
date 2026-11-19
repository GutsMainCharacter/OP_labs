'use strict';

const max = (matrix) => {
  let result = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value > result) {
        result = value;
      }
    }
  }
  return result;
};

const matrix = [
  [-3, 14, 8],
  [21, 0, -9],
  [5, 17, 11],
];

console.log(max(matrix));
console.log(max([[-8, -2], [-15, -4]]));

module.exports = { max };
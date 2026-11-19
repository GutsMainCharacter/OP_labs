'use strict';

const sumFor = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

const sumForOf = (...args) => {
  let total = 0;
  for (const value of args) {
    total += value;
  }
  return total;
};

const sumWhile = (...args) => {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
};

const sumDoWhile = (...args) => {
  if (args.length === 0) {
    return 0;
  }
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};

const sumReduce = (...args) => args.reduce((total, value) => total + value, 0);

console.log(sumFor(12, -7, 30));
console.log(sumForOf(100));
console.log(sumWhile(2.5, 2.5, 5));
console.log(sumDoWhile());
console.log(sumReduce(50, -20, -20, -5));

module.exports = { sumFor, sumForOf, sumWhile, sumDoWhile, sumReduce };
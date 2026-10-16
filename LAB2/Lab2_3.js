'use strict';

const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x * x * x;

const calculate = () => {
  const result = [];
  for (let i = 0; i < 10; i++) {
    const sq = square(i);
    const cb = cube(i);
    result.push(average(sq, cb));
  }
  return result;
};

console.log(calculate());

'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('pipe: усі аргументи мають бути функціями');
    }
  }
  return (x) => fns.reduce((value, fn) => fn(value), x);
};

const addTen = (x) => x + 10;
const half = (x) => x / 2;
const negate = (x) => -x;

const f = pipe(addTen, half, negate);
console.log(f(6));

const g = pipe(addTen, addTen);
console.log(g(1));

try {
  pipe(addTen, 'oops', half);
} catch (error) {
  console.log(error.message);
}

module.exports = { pipe };
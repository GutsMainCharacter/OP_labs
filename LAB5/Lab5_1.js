'use strict';

const seq = (...fns) => {
  const chain = (arg) => {
    if (typeof arg === 'function') {
      return seq(...fns, arg);
    }
    return fns.reduceRight((value, fn) => fn(value), arg);
  };
  return chain;
};

console.log(seq((x) => x * 3)((x) => x - 4)(10));
console.log(seq((x) => x - 4)((x) => x * 3)(10));
console.log(seq((x) => x + 2)((x) => x * 4)((x) => x / 2)((x) => x - 1)(9));

module.exports = { seq };
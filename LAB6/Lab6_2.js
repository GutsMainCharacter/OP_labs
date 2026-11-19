'use strict';

const compose = (...fns) => {
  const handlers = [];

  const f = (x) => {
    let result;
    try {
      result = fns.reduceRight((value, fn) => fn(value), x);
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
    }
    return result;
  };

  f.on = (event, handler) => {
    if (event === 'error') {
      handlers.push(handler);
    }
    return f;
  };

  return f;
};

const addTen = (x) => x + 10;
const half = (x) => x / 2;

const ok = compose(addTen, half);
console.log(ok(6));

const broken = () => {
  throw new Error('щось пішло не так');
};

const bad = compose(addTen, broken, half);
bad.on('error', (error) => {
  console.log('Помилка:', error.message);
});
console.log(bad(6));

module.exports = { compose };
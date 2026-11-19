'use strict';

const hasType = (value, type) =>
  value !== undefined && value !== null && value.constructor === type;

const contract = (fn, ...types) => {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      if (!hasType(args[i], argTypes[i])) {
        const expected = argTypes[i].name;
        throw new TypeError(`Аргумент ${i + 1} має бути ${expected}`);
      }
    }
    const result = fn(...args);
    if (!hasType(result, resultType)) {
      throw new TypeError(`Результат має бути ${resultType.name}`);
    }
    return result;
  };
};

const multiply = (a, b) => a * b;
const safeMultiply = contract(multiply, Number, Number, Number);
console.log(safeMultiply(6, 7));

const shout = (text) => text.toUpperCase();
const safeShout = contract(shout, String, String);
console.log(safeShout('hello'));

try {
  safeMultiply(6, '7');
} catch (error) {
  console.log(error.message);
}

try {
  contract((x) => x, Number, String)(5);
} catch (error) {
  console.log(error.message);
}

module.exports = { contract };
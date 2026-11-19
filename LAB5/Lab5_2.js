'use strict';

const array = () => {
  const items = [];

  const get = (index) => items[index];

  get.push = (value) => {
    items.push(value);
  };

  get.pop = () => items.pop();

  return get;
};

const colors = array();

colors.push('red');
colors.push('green');
colors.push('blue');

console.log(colors(0));
console.log(colors(2));
console.log(colors(7));

console.log(colors.pop());
console.log(colors.pop());
console.log(colors.pop());
console.log(colors.pop());

module.exports = { array };
'use strict';

const store = (value) => () => value;

const readName = store('Olena');
console.log(readName());
console.log(readName());

const readList = store([1, 2, 3]);
console.log(readList());

module.exports = { store };
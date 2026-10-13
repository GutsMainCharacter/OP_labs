'use strict';

const introspect = (iface) => {
  const result = [];
  for (const key of Object.keys(iface)) {
    const value = iface[key];
    if (typeof value === 'function') {
      result.push([key, value.length]);
    }
  }
  return result;
};

const iface = {
  first: (x) => [x],
  second: function(x, y) {
    return [x, y];
  },
  third(x, y, z) {
    return [x, y, z];
  },
  notFunction: 42,
};

console.log(introspect(iface));

module.exports = { introspect };
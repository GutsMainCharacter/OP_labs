'use strict';

const iterate = (object, callback) => {
  for (const key of Object.keys(object)) {
    callback(key, object[key], object);
  }
};

const prices = { tea: 25, coffee: 40, juice: 30 };

iterate(prices, (key, value) => {
  console.log(`${key} costs ${value}`);
});

iterate(prices, (key, value, obj) => {
  console.log(key, value, Object.keys(obj).length);
});

module.exports = { iterate };
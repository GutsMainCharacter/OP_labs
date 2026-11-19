'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const { born, died } = persons[name];
    result[name] = died - born;
  }
  return result;
};

const writers = {
  shevchenko: { born: 1814, died: 1861 },
  ukrainka: { born: 1871, died: 1913 },
  franko: { born: 1856, died: 1916 },
  kotsiubynsky: { born: 1864, died: 1913 },
};

console.log(ages(writers));

module.exports = { ages };
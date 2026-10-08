'use strict';

const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'JavaScript', 42n, undefined, null, {}, [], () => {},
];

{
  const counts = {
    number: 0,
    string: 0,
    boolean: 0,
    bigint: 0,
    undefined: 0,
    object: 0,
    function: 0,
  };

  for (const value of values) {
    const type = typeof value;
    counts[type]++;
  }

  console.dir({ counts });
}

{
  const counts = {};

  for (const value of values) {
    const type = typeof value;
    if (counts[type] === undefined) {
      counts[type] = 0;
    }
    counts[type]++;
  }

  console.dir({ counts });
}

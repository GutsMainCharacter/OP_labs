'use strict';

const fn = () => {
  const friend1 = { name: 'Andrysha' };
  let friend2 = { name: 'Vitalik' };

  friend1.name = 'Illia';
  friend2.name = 'Pig';

  friend2 = { name: 'Other' };

  console.dir({ friend1, friend2 });
};

const createUser = (name, city) => ({ name, city });

fn();
console.dir(createUser('Duolingo', 'Duo_APP'));

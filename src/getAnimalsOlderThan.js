const { species } = require('../data/zoo_data');

const animalsAreOlder = ({ residents }, age) => residents
  .every((resident) => resident.age >= age);

const getAnimalsOlderThan = (animal, age) => {
  const specie = species.find(({ name }) => name === animal);
  return animalsAreOlder(specie, age);
};

module.exports = getAnimalsOlderThan;

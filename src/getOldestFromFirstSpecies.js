const { species, employees } = require('../data/zoo_data');

const oldestAnimal = (actualAnimal, nextAnimal) => {
  if (actualAnimal.age < nextAnimal.age) {
    return 1;
  }
  if (actualAnimal.age > nextAnimal.age) {
    return -1;
  }
  return 0;
};

const getOldestFromFirstSpecies = (employeeId) => {
  const specieId = employees.find(({ id }) => employeeId === id)
    .responsibleFor[0];
  const animals = species.find(({ id }) => specieId === id).residents;
  const animalObject = animals.sort(oldestAnimal)[0];
  return Object.values(animalObject);
};

module.exports = getOldestFromFirstSpecies;

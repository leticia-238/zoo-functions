const { species } = require('../data/zoo_data');

const animalsBySex = (residents, sex) => residents.filter((resident) => resident.sex === sex);

const allAnimals = (acc, { name, residents }) => {
  acc[name] = residents.length;
  return acc;
};

const countAnimals = (objeto) => {
  if (objeto) {
    const { specie, sex } = objeto;
    const { residents } = species.find(({ name }) => name === specie);
    return sex ? animalsBySex(residents, sex).length : residents.length;
  }
  return species.reduce(allAnimals, {});
};

console.log(countAnimals());

module.exports = countAnimals;

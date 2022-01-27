const { species } = require('../data/zoo_data');

const sortBySex = (options, residents) => residents
  .filter((resident) => resident.sex === options.sex)
  .map((resident) => resident.name);

const getAnimalNames = (options, residents) => {
  let animalNames = residents.map((resident) => resident.name);
  if (options.sex) {
    animalNames = sortBySex(options, residents);
  }
  if (options.sorted) {
    animalNames = animalNames.sort();
  }
  return animalNames;
};

const getAnimalMap = (options) => {
  const animalLocations = {};
  species.forEach(({ location }) => { animalLocations[location] = []; });
  if (options && options.includeNames) {
    species.forEach(({ name, location, residents }) => {
      const specieName = {};
      specieName[name] = getAnimalNames(options, residents);
      animalLocations[location].push(specieName);
    });
    return animalLocations;
  }
  species.forEach(({ name, location }) => { animalLocations[location].push(name); });
  return animalLocations;
};

module.exports = getAnimalMap;

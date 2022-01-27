const { species, employees } = require('../data/zoo_data');

const options = {
  name: (name) => employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name || `${firstName} ${lastName}` === name),
  id: (id) => employees.find((employee) => employee.id === id),
};

const searchSpeciesById = (idList) => {
  const specieNames = [];
  const specieLocations = [];
  species.forEach(({ id, name, location }) => {
    if (idList.includes(id)) {
      specieNames.push(name);
      specieLocations.push(location);
    }
  });
  return { specieNames, specieLocations };
};

const getEmployeeInfos = ({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: searchSpeciesById(responsibleFor).specieNames,
  locations: searchSpeciesById(responsibleFor).specieLocations,
});

const getEmployeesCoverage = (object) => {
  if (object) {
    const option = Object.keys(object)[0];
    const optionValue = Object.values(object)[0];
    const employee = options[option](optionValue);
    if (employee) {
      return getEmployeeInfos(employee);
    }
    throw new Error('Informações inválidas');
  }
  return employees.map((employee) => getEmployeeInfos(employee));
};

module.exports = getEmployeesCoverage;

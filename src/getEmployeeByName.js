const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName) {
    return employees.find(({ firstName, lastName }) =>
      employeeName === firstName || employeeName === lastName);
  }
  return {};
};

module.exports = getEmployeeByName;

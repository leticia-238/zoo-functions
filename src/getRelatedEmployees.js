const { employees } = require('../data/zoo_data');

let listManagerIds = employees.flatMap(({ managers }) => managers);
listManagerIds = listManagerIds.filter((id, index) =>
  index === listManagerIds.lastIndexOf(id));

const isManager = (employeeId) => listManagerIds.includes(employeeId);

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees.filter(({ managers }) => managers.includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };

console.log(listManagerIds);

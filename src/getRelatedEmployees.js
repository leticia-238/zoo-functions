const { employees } = require('../data/zoo_data');

const managersList = [];

employees.forEach(({ managers }) => {
  const newEmployess = managers.filter((manager) => (!managersList.includes(manager)));
  managersList.push(...newEmployess);
});

const isManager = (employeeId) => managersList.includes(employeeId);

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const relatedEmployess = employees.filter(({ managers }) => managers.includes(managerId));
    return relatedEmployess.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };

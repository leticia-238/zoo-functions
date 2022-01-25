const { species } = require('../data/zoo_data');

const searchId = (id) => species.find((specie) => specie.id === id);

const getSpeciesByIds = (...ids) => ids.map(searchId);

module.exports = getSpeciesByIds;

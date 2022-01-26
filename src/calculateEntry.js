const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (Array.isArray(entrants) && entrants.length > 0) {
    return {
      child: entrants.filter(({ age }) => age < 18).length,
      adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
      senior: entrants.filter(({ age }) => age >= 50).length,
    };
  }
  return 0;
};

const calculateEntry = (entrants) => {
  const { child = 0, adult = 0, senior = 0 } = countEntrants(entrants);
  return child * prices.child + adult * prices.adult + senior * prices.senior;
};

module.exports = { calculateEntry, countEntrants };

const { species, hours } = require('../data/zoo_data');

const animalsOnExhibition = (day) => species.reduce((acc, specie) => {
  if (specie.availability.includes(day)) {
    acc.push(specie.name);
  }
  return acc;
}, []);

const weekSchedule = () => {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    schedule[day] = {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: animalsOnExhibition(day),
    };
  });
  schedule.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const schedule = weekSchedule();
  const specie = species.find(({ name }) => scheduleTarget === name);
  if (schedule[scheduleTarget]) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  } if (specie) {
    return specie.availability;
  }
  return schedule;
};

module.exports = getSchedule;

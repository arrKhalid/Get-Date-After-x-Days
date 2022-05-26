const newDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = newDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;

const addDays = require("date-fns/addDays");

function addNoOfDays(days) {
  let result = addDays(new Date(2020, 7, 22), days);
  console.log(result);
}

module.exports = addNoOfDays;

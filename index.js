const namelist = require("../country/state/city/index");
const findfirstnames = require("../utilities/utils/index");
const getPeopleInCity = (namelist) => {
  console.log(findfirstnames(namelist));
};
getPeopleInCity();
module.exports = getPeopleInCity;

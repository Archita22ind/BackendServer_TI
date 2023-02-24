const monthConvertor = require('../utils/monthConvertor');
const getAllFilteredJobs = require('./getAllFilteredJobs');

const formatKey = (datestring) => {
  let date = new Date(datestring);
  return monthConvertor(date.getMonth()) + ' ' + date.getFullYear();
};

getOpenJobReqs = async (queryJobBoards, filterOptions) => {

  const finalList = [];
  const promises = getAllFilteredJobs(queryJobBoards,filterOptions);

  return Promise.all(promises).then((results) => {
    results.forEach((e) => {
      e.forEach((v) => {
        finalList.push(v.data.inventory.posted);
      });
    });

    const reqsPerMonth = finalList.reduce((obj, posted_date) => {
      const key = formatKey(posted_date);
      obj[key] = obj[key] ? obj[key] + 1 : 1;
      return obj;
    }, {});

    return reqsPerMonth;
  });
};

module.exports = {
  getOpenJobReqs
};

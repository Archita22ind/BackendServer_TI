const getAllFilteredJobs = require('./getAllFilteredJobs');
const { SKILL_SET } = require('../constants/constants');
const sortObjectDesc = require('../utils/sortObjectDesc');

getSkills = async (queryJobBoards, filterOptions) => {
  const finalList = [];
  const promises = getAllFilteredJobs(queryJobBoards, filterOptions);
  let skillSet = SKILL_SET;
  const skillSetResult = {};

  return Promise.all(promises).then((results) => {
    results.forEach((e) => {
      e.forEach((v) => {
        finalList.push({ job_description: v.data.job_description });
      });
    });

    finalList.forEach((v) => {
      skillSet.forEach((e) => {
        if (v.job_description?.includes(e.skill)) {
          e.count = e.count + 1;
          skillSetResult[e.skill] = e.count;
        }
      });
    });

    Object.keys(skillSetResult).forEach(function (key) {
      skillSetResult[key] = (skillSetResult[key] / finalList.length) * 100;
    });

    return sortObjectDesc(skillSetResult);
  });
};

module.exports = {
  getSkills
};

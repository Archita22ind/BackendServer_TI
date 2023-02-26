const getAllFilteredJobs = require('./getAllFilteredJobs');
const { SKILL_SET } = require('../constants/constants');
const sortObjectDesc = require('../utils/sortObjectDesc');

getSkills = async (queryJobBoards, filterOptions) => {
  const finalList = [];
  const promises = getAllFilteredJobs(queryJobBoards, filterOptions);
  const skillSetResult = {};

  return Promise.all(promises).then((results) => {
    results.forEach((e) => {
      e.forEach((v) => {
        finalList.push({ job_description: v.data.job_description});
      });
    });

    finalList.forEach((v) => {
      SKILL_SET.forEach((skill) => {
        let regex = new RegExp("\\b" + skill + "\\b", "i");
        if (regex.test( v.job_description)) {
          skillSetResult[skill] = skill in skillSetResult ?
             1 + skillSetResult[skill] : 0;
            }
        }
      );
    });

    const result = Object.keys(skillSetResult).filter(e=> skillSetResult[e]>0)
    .reduce(function ( obj, key) {
      obj[key] = ((skillSetResult[key] / finalList.length) * 100).toFixed(2);
      return obj;
    },{});

    return sortObjectDesc(result);
  });
};

module.exports = {
  getSkills
};

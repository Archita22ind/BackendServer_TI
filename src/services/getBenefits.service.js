const getAllFilteredJobs = require('./getAllFilteredJobs');
const sortObjectDesc = require('../utils/sortObjectDesc');

getBenefits = async (queryJobBoards, filterOptions) => {
  const finalList = [{}];

  const promises = getAllFilteredJobs(queryJobBoards, filterOptions);

  return Promise.all(promises).then((results) => {
    results.forEach((e) => {
      e.forEach((v) => {
        finalList.push(v.data.compensation.benefits);
      });
    });
    let count = finalList.length;

    const fourOOnek =
      ((finalList.filter((e) => {
        return e._401K === 1;
      }).length /
        count) *
      100).toFixed(2);

    const PTO =
      ((finalList.filter((e) => {
        return e.PTO === 1;
      }).length /
        count) *
      100).toFixed(2);

    const medicalInsurance =
      ((finalList.filter((e) => {
        return e.insurance?.health === 1;
      }).length /
        count) *
      100).toFixed(2);

    const dentalInsurance =
      ((finalList.filter((e) => {
        return e.insurance?.dental === 1;
      }).length /
        count) *
      100).toFixed(2);
    const visionInsurance =
      ((finalList.filter((e) => {
        return e.insurance?.vision === 1;
      }).length /
        count) *
      100).toFixed(2);
    const lifeInsurance =
      ((finalList.filter((e) => {
        return e.insurance?.life === 1;
      }).length /
        count) *
      100).toFixed(2);

    const benefitPercent = {
      '401k': fourOOnek,
      PTO: PTO,
      medicalInsurance: medicalInsurance,
      dentalInsurance: dentalInsurance,
      visionInsurance: visionInsurance,
      lifeInsurance: lifeInsurance
    };

    return sortObjectDesc(benefitPercent);
  });
};

module.exports = {
  getBenefits
};

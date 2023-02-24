
getCompanyNames = async (queryJobBoards, typeaheadValue ) => {

  const promises = [];
  const companiesList = [];
   queryJobBoards.forEach((e) => {
    promises.push(
      e.find({
        'data.job_info.companyName': {
          $regex: new RegExp(typeaheadValue, "i"),
        },
      })
    );
  });

  return Promise.all(promises)
      .then((results) => {
        results.forEach((e) => {
          e.forEach((v) => {
            companiesList.push(v.data.job_info.companyName);
          });
        });
        let uniqueList =  [...new Set(companiesList.sort())];
        return uniqueList;
      })
};

module.exports = {
  getCompanyNames
}
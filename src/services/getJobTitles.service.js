getJobTitles = async (queryJobBoards, typeaheadValue) => {
  const promises = [];
  const jobList = [];

  queryJobBoards.forEach((e) => {
    promises.push(
      e.find({
        "data.origin_title": {
          $regex: new RegExp(typeaheadValue, "i"),
        },
      })
    );
  });

  return Promise.all(promises).then((results) => {
    results.forEach((e) => {
      e.forEach((v) => {
        jobList.push(v.data.origin_title);
      });
    });
    let uniqueList = [...new Set(jobList.sort())];
    return uniqueList;
  });
};

module.exports = {
  getJobTitles,
};

const getAllFilteredJobs = (queryJobBoards, filterOptions) => {
  const promises = [];

  const jobTitleQuery = filterOptions.job_title?.length === 0 ? { $regex: new RegExp('', 'i') } : filterOptions.job_title;
  const companyNameQuery =
    filterOptions.companyName?.length === 0 ? { $regex: new RegExp('', 'i') } : filterOptions.companyName;
  // const jobTypeQuery = filterOptions.job_type.length === 0? { $regex: new RegExp("", "i")} : filterOptions.job_type;

  const startDate =
    filterOptions.startDate.length === 0 ? new Date('1970-01-01T00:00:00.000Z') : new Date(filterOptions.startDate);
  const endDate =
    filterOptions.endDate.length === 0 ? new Date('2123-01-01T00:00:00.000Z') : new Date(filterOptions.endDate);
  const cityQuery = filterOptions.city?.length === 0 ? { $elemMatch: {} } : { $elemMatch: { city: filterOptions.city } };
  // const industry = req.filter.industry;
  // const compensation = req.body?.compensation;
 
  queryJobBoards.forEach((e) => {
    promises.push(
      e.find({
        'data.origin_title': jobTitleQuery,
        'data.inventory.posted': {
          $gte: startDate,
          $lte: endDate
        },
        'data.job_info.locations': cityQuery,
        'data.job_info.companyName': companyNameQuery
        // 'data.job_type' : { $all: {jobTypeQuery }},
      })
    );
  });

  return promises;
};

module.exports = getAllFilteredJobs;

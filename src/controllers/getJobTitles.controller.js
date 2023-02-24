const {getJobTitlesService} = require('../services');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const getJobBoards = require('../utils/jobBoards');


const getJobTitles = catchAsync(async (req, res) => {

  const queryJobBoards = getJobBoards(req.query.jobBoard);
  let typeaheadValue = "";

  if(req.query.typeahead){
    typeaheadValue = req.query.typeahead;
  }

  getJobTitlesService.getJobTitles (queryJobBoards, typeaheadValue).then((response) => {
    if (!response) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No records found for given filter options');
    }
        res.send(response);
  });


  });

  module.exports = {
    getJobTitles,
  };
  
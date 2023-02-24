const httpStatus = require('http-status');
const {getOpenJobReqsService} = require('../services');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const getJobBoards = require('../utils/jobBoards');


const getOpenJobReqs = catchAsync(async (req, res) => {
  
    const queryJobBoards = getJobBoards(req.query.jobBoard);
    let filterOptions = {...req.query};
    
    getOpenJobReqsService.getOpenJobReqs(queryJobBoards, filterOptions).then((response) => {
        if (!response) {
            throw new ApiError(httpStatus.NOT_FOUND, 'No records found for given filter options');
        }
            res.send(response);
    });
  });

  module.exports = {
    getOpenJobReqs,
  };
  
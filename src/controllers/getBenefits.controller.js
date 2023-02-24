const { getBenefitsService } = require('../services');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const getJobBoards = require('../utils/jobBoards');

const getBenefits = catchAsync( async (req, res) => {

    const queryJobBoards = getJobBoards(req.query.jobBoard);
    let filterOptions = {...req.query};

    getBenefitsService.getBenefits(queryJobBoards, filterOptions).then((response) => {
        if (!response) {
            throw new ApiError(httpStatus.NOT_FOUND, 'No records found for given filter options');
        }
            res.send(response);
    });

});

module.exports = {
  getBenefits
};

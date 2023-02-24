const { getCompanyNamesService } = require('../services');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const getJobBoards = require('../utils/jobBoards');
const catchAsync = require('../utils/catchAsync');

const getCompanyNames = catchAsync( async (req, res) => {


    const queryJobBoards = getJobBoards(req.query.jobBoard);
    let typeaheadValue = "";

    if(req.query.typeahead){
        typeaheadValue = req.query.typeahead;
    }

    getCompanyNamesService.getCompanyNames(queryJobBoards, typeaheadValue).then((response) => {
        if (!response) {
            throw new ApiError(httpStatus.NOT_FOUND, 'No records found for given filter options');
        }
     
        res.send(response);
    });

});

module.exports = {
  getCompanyNames
};

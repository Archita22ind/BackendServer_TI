const { JOB_BOARDS } = require('../constants/constants');
const schemaFieldConvertor = require('../utils/schemaFieldConvertor');

const getJobBoards = (input)=>{
    let queryJobBoards = [];

    if(!Array.isArray(input)){
        queryJobBoards[0] = input;
    }else{
        queryJobBoards = input ;
    }

    if (input === undefined ||  queryJobBoards[0] === 'All') {
        queryJobBoards = JOB_BOARDS;
    } else {
     
        queryJobBoards.forEach(element => {
            queryJobBoards.push(schemaFieldConvertor(element));
        });
        queryJobBoards = JOB_BOARDS.filter((value) => queryJobBoards.includes(value));
    }
    
    return queryJobBoards;
}

module.exports = getJobBoards;

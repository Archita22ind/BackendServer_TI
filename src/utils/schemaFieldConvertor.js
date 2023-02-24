const Indeed = require("../models/indeed.model");
const LinkedIn = require("../models/linkedin.model");

const schemaFieldConvertor = (name) => {
    switch (name) {
      case 'Indeed':
        return Indeed;
      case 'LinkedIn':
        return LinkedIn;
      default:
        return;  
 }
}   


module.exports = schemaFieldConvertor
  
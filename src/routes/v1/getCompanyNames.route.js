const express = require("express");
const router = express.Router();
const getCompanyNamesController = require("../../controllers/getCompanyNames.controller");

router
.route('/')
.get( getCompanyNamesController.getCompanyNames);

module.exports = router;

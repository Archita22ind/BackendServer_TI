const express = require('express');
const router = express.Router();
const getJobTitlesController = require('../../controllers/getJobTitles.controller');

router
.route('/')
.get( getJobTitlesController.getJobTitles);

module.exports = router;

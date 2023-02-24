const express = require("express");
const router = express.Router();
const getOpenJobReqsController = require("../../controllers/getOpenJobReqs.controller");

router
.route('/')
.get( getOpenJobReqsController.getOpenJobReqs);

module.exports = router;

const express = require("express");
const router = express.Router();
const getBenefitsController = require("../../controllers/getBenefits.controller");

router
.route('/')
.get( getBenefitsController.getBenefits);

module.exports = router;

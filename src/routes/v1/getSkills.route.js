const express = require("express");
const router = express.Router();
const getSkillsController = require("../../controllers/getSkills.controller");

router
.route('/')
.get( getSkillsController.getSkills);

module.exports = router;

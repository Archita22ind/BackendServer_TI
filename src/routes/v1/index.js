const express = require('express');
const getJobTitlesRoute = require('./getJobTitles.route');
const getCompanyNamesRoute = require('./getCompanyNames.route');
const getOpenJobReqsRoute = require('./getOpenJobReqs.route');
const getBenefitsRoute = require('./getBenefits.route');
const getSkillsRoute = require('./getSkills.route');

const router = express.Router();

const defaultRoutes = [
    {
      path: '/getJobTitles',
      route: getJobTitlesRoute,
    },
    {
      path: '/getCompanyNames',
      route: getCompanyNamesRoute,
    },
    {
      path: '/getOpenJobReqs',
      route: getOpenJobReqsRoute,
    },
    {
      path: '/getBenefits',
      route: getBenefitsRoute,
    },
    {
      path: '/getSkills',
      route: getSkillsRoute,
    },
  ];


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });


module.exports = router;
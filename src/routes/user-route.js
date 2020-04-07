'use strict';

const corsRoute = require('cors');
const express = require('express');
const helper = require('../helper/helper');

const router = express.Router();

const userController = require('../controllers/user-controller');

//router.options("*", corsRoute(helper.proxyCors));

router.post('/signin', userController.authenticate);
router.post('/signout', userController.authorize, userController.finishAuthenticate);

//router.use(corsRoute(helper.proxyCors));

module.exports = router;
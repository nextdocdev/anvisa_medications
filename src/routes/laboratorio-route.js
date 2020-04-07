'use strict';

const corsRoute = require('cors');
const express = require('express');
const helper = require('../helper/helper');

const router = express.Router();

const labController = require('../controllers/laboratorio-controller');
const userController = require('../controllers/user-controller');

//router.options("*", corsRoute(helper.proxyCors));

router.get('/', userController.authorize, labController.get);
router.post('/findByName', userController.authorize, labController.getByName);
router.post('/findById', userController.authorize, labController.getById);

//router.use(corsRoute(proxyCors));

module.exports = router;
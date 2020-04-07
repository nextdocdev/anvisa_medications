'use strict';

const corsRoute = require('cors');
const express = require('express');
const helper = require('../helper/helper');

const router = express.Router();

const produtoController = require('../controllers/produto-controller');
const userController = require('../controllers/user-controller');

//router.options("*", corsRoute(helper.proxyCors));

router.get('/', userController.authorize, produtoController.get);
router.post('/substancia', userController.authorize, produtoController.getBySubstancia);
router.post('/classe', userController.authorize, produtoController.getByClasseTerapeutica);

//router.use(corsRoute(helper.proxyCors));

module.exports = router;
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

//const proxy = require('./helper/helper');
const routerUser = require('./routes/user-route');
const routerLaboratorio = require('./routes/laboratorio-route');
const routerProduto = require('./routes/produto-route');

const app = express();

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

var knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: "./medicamentos.db"
	}
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorHandler());

//app.use('/api', proxy.proxyCors);
app.use('/produto', routerProduto);
app.use('/laboratorio', routerLaboratorio);
app.use('/auth', routerUser);

module.exports = app;

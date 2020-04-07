'use strict';

//const laboratorio = require('../models/customer');
const connection = require('../database/connection');

exports.get = async () => {
	const incidents = await connection('laboratorio').select('*');
	return incidents;
};

exports.getByName = async (data) => {
	
	let sentence = '%' + data.name + '%';
	const incidents = await connection('laboratorio')
		.where('Nome', 'like', sentence)
		.select('*');
		
	return incidents;
};

exports.getById = async (data) => {
	
	const incidents = await connection('laboratorio')
		.where('id', data.id)
		.select('*');
		
	return incidents;
};
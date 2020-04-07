'use strict';

const Validation = require('../validators/general-validators');
const repository = require('../repositories/laboratorio-repository');

exports.get = async (request, response, next) => {
	try {
		var dataResult = await repository.get();
		response.status(200).send(dataResult);
	} catch (error) {
		response.status(500).send({ message: 'get: Falha ao processar sua requisição', data: error });
	}
};

exports.getByName = async (request, response, next) => {

	let dataValidation = new Validation();
	dataValidation.isRequired(request.body.name, "Nenhum dado foi enviado para pesquisa");

	if (!dataValidation.isValid()) {
		response.status(400).send(dataValidation.errors()).end();
		return;
	}

	try {
		var dataResult = await repository.getByName({
			name: request.body.name
		});
		response.status(200).send(dataResult);
	} catch (error) {
		response.status(500).send({ message: 'getByName: Falha ao processar sua requisição', data: error });
	}
};

exports.getById = async (request, response, next) => {

	let dataValidation = new Validation();
	dataValidation.isRequired(request.body.id, "Nenhum dado foi enviado para pesquisa");
	
	if (!dataValidation.isValid()) {
		response.status(400).send(dataValidation.errors()).end();
		return;
	}

	try {
		var dataResult = await repository.getById({
			id: request.body.id
		});
		response.status(200).send(dataResult);
	} catch (error) {
		response.status(500).send({ message: 'getById: Falha ao processar sua requisição', data: error });
	}
};

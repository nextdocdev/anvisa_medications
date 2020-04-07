'use strict';

const Validation = require('../validators/general-validators');
const repository = require('../repositories/produto-repository');

exports.get = async (request, response, next) => {
	try {
		var dataResult = await repository.get();
		response.status(200).send(dataResult);
	} catch (error) {
		response.status(500).send({ message: 'get: Falha ao processar sua requisição', data: error });
	}
};

exports.getBySubstancia = async (request, response, next) => {

	let dataValidation = new Validation();
	dataValidation.isRequired(request.body.substancia, "Forneça a substância para pesquisa");

	if (!dataValidation.isValid()) {
		response.status(400).send(dataValidation.errors()).end();
		return;
	}

	try {
		var dataResult = await repository.getBySubstancia(request.body.substancia);
		response.status(200).send(dataResult);
	} catch (error) {
		response.status(500).send({ message: 'getBySubstancia: Falha ao processar sua requisição', data: error });
	}
};

exports.getByClasseTerapeutica = async (request, response, next) => {

	let dataValidation = new Validation();
	dataValidation.isRequired(request.body.classeTerapeutica, "Forneça a Classe Terapêutica para pesquisa");

	if (!dataValidation.isValid()) {
		response.status(400).send(dataValidation.errors()).end();
		return;
	}

	try {
		var dataResult = await repository.getByClasseTerapeutica(request.body.classeTerapeutica);
		response.status(200).send(dataResult);
	} catch (error) {
		response.status(500).send({ message: 'getByClasseTerapeutica: Falha ao processar sua requisição', data: error });
	}
};

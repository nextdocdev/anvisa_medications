'use strict';

const validation = require('../validators/general-validators');
const authService = require('../services/auth-service');

exports.authorize = async (request, response, next) => {
	var token = request.body.token || request.query.token || request.headers['x-auth-id'];
	if (!token) {
		return response.status(401).json({ message: 'Identificador não encontrado' });
	}

	try {
		await authService.authorize(token)
			.then(() => {
				next();
			});
	} catch (error) {
		return response.status(401).json({ error, message: 'Identificador inválido' });
	}
}

exports.authenticate = async (request, response, next) => {

	let dataValidation = new validation();

	dataValidation.isEmail(request.body.email, "O e-mail deve ser válido.");
	dataValidation.hasMinLen(request.body.password, 6, "A senha deve conter pelo menos 6 caracteres.");

	if (!dataValidation.isValid()) {
		response.status(400).send(dataValidation.errors()).end();
		return;
	}

	try {
		//generate token to user
		const token = await authService.authFirebase({ email: request.body.email, password: request.body.password });
		response.status(201).send({
			token: {
				tokenId: token.idToken,
				uid: token.uid
			},
			message: 'Autenticação realizada com sucesso.'
		});
	} catch (error) {
		response.status(400).send({
			errorInfo: {
				originalcode: error.code,
				originalMessage: error.message,
				message: 'Erro ao tentar autenticar o usuário!'
			}
		});
	}
};

exports.finishAuthenticate = async (request, response, next) => {
	var uid = request.body.uid || request.query.uid || request.headers['x-auth-uid'];
	if (!uid) {
		return response.status(401).json({ message: 'Identificador do usuário não encontrado' });
	}

	await authService.finishAuth(uid)
		.then((timestamp) => {
			return response.status(200).json({ message: `Token foi revogado em: ${timestamp}` });
		});
};

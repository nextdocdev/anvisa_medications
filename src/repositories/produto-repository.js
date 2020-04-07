'use strict';

const connection = require('../database/connection');

let fieldsToShow = [
	"LaboratorioId", 
	"TipoProdutoId", 
	"ProdutoId", 
	"Produto", 
	"Substancia", 
	"Apresentacao", 
	"ClasseTerapeutica", 
	"CodigoGGREM", 
	"Registro", 
	"EAN1", 
	"Tarja"];

exports.get = async () => {
	const produto = await connection('produto')
		.select(fieldsToShow);
	return produto;
};

exports.getBySubstancia = async (substancia) => {
	const produto = await connection('produto')
		.where('Substancia', substancia)
		.select(fieldsToShow);
		
	return produto;
};

exports.getByClasseTerapeutica = async (classe) => {
	const produto = await connection('produto')
		.where('ClasseTerapeutica', classe)
		.select(fieldsToShow);
		
	return produto;
};

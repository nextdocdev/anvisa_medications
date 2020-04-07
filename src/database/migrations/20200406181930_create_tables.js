
exports.up = function(knex) {
	return createTables();
};

exports.down = function(knex) {
	knex.schema.dropTable('PrecoMedicamento');
	knex.schema.dropTable('Produto');
	knex.schema.dropTable('Laboratorio');
	return knex.schema.dropTable('TipoProduto');
};

function createTables() {
	knex.schema.createTable('Laboratorio', function (table) {
		table.number('Id').primary();
		table.string('Nome').notNullable();
		table.string('Cnpj').notNullable();
	});

	knex.schema.createTable('Produto', function (table) {
		table.increments();
		table.number('LaboratorioId').primary();
		table.number('TipoProdutoId').notNullable();
		table.string('Produto', 250).notNullable();
		table.string('Substancia', 450).notNullable();
		table.string('Apresentacao', 250).notNullable();
		table.string('ClasseTerapeutica', 250).notNullable();
		table.string('CodigoGGREM', 250).notNullable();
		table.string('Registro', 250).notNullable();
		table.string('EAN1', 50).notNullable();
		table.string('EAN2', 50).notNullable();
		table.string('EAN3', 50).notNullable();
		table.string('RegimePreco', 50).notNullable();
		table.string('ConcessaoCreditoTributario', 50).notNullable();
		table.string('Comercializacao2018', 10).notNullable();
		table.string('Tarja', 50).notNullable();
		table.string('RestricaoHospitalar', 10).notNullable();

		table.foreign('LaboratorioId').references('Id').inTable('Laboratorio');
		table.foreign('TipoProdutoId').references('Id').inTable('TipoProduto');
	});

	knex.schema.createTable('PrecoMedicamento', function (table) {
		table.number('Id').primary();
		table.number('ProdutoId').notNullable();
		table.string('PFSemImpostos', 50).notNullable();
		table.string('PF0', 50).notNullable();
		table.string('PF12', 50).notNullable();
		table.string('PF17', 50).notNullable();
		table.string('PF17ALC', 50).notNullable();
		table.string('PF175', 50).notNullable();
		table.string('PF175ALC', 50).notNullable();
		table.string('PF18', 50).notNullable();
		table.string('PF18ALC', 50).notNullable();
		table.string('PF20', 50).notNullable();
		table.string('PMC0', 50).notNullable();
		table.string('PMC12', 50).notNullable();
		table.string('PMC17', 50).notNullable();
		table.string('PMC17ALC', 50).notNullable();
		table.string('PMC175', 50).notNullable();
		table.string('PMC175ALC', 50).notNullable();
		table.string('PMC18', 50).notNullable();
		table.string('PMC18ALC', 50).notNullable();
		table.string('PMC20', 50).notNullable();
		table.string('CAP', 100).notNullable();
		table.string('CONFAZ87', 100).notNullable();
		table.string('ICMS0', 100).notNullable();
		table.string('ANALISERECURSAL', 100).notNullable();

		table.foreign('ProdutoId').references('Id').inTable('Produto');
	});

	return knex.schema.createTable('TipoProduto', function (table) {
		table.number('Id').primary();
		table.string('Nome', 100).notNullable();
	});
}
'use strict'

let assert = require('assert');
let repo = require('../src/repositories/laboratorio-repository');

describe('test-repositories-laboratorio', () => {
	it('get should return an list-object of laboratorios', () => {
		return repo.get()
			.then((res) => {
				assert('any', typeof (res));
			});
	});
});
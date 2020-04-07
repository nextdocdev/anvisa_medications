'use strict'

let assert = require('assert');

let firebaseConfig = require('../firebase-config/firebase.config.json');
let firebaseConfigAdmin = require('../firebase-config/firebase.service-key.json');
let FirebaseAuth = require('../src/services/firebase-auth');

describe('test-firebase-auth', () => {
	let firebaseAuth = new FirebaseAuth(firebaseConfig, firebaseConfigAdmin);

	it('signIn should return an object with idToken and uid', () => {
		return firebaseAuth.signIn('carlos.barata@gmail.com', 'pass@word1')
			.then((res) => {
				assert('object', typeof (res));
			});
	});

	it('signIn should return a an object code and message', () => {
		return firebaseAuth.signIn('fail@fail.com', 'fail')
			.catch((err) => {
				assert('object', typeof (err));
			});
	});

	it('authToken should return true if token is valid', () => {
		return firebaseAuth.signIn('carlos.barata@gmail.com', 'pass@word1')
			.then((user) => {
				return firebaseAuth.authToken(user.idToken)
					.then(() => {
						return true;
					});
				return true;
			});
	})
});
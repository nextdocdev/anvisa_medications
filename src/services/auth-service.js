'use strict'

const firebaseConfig = require('../../firebase-config/firebase.config.json');
const firebaseConfigAdmin = require('../../firebase-config/firebase.service-key.json');

const FirebaseAuth = require('./firebase-auth');
const firebaseAuth = new FirebaseAuth(firebaseConfig, firebaseConfigAdmin);

exports.authFirebase = async (data) => {
	return await firebaseAuth.signIn(data.email, data.password);
}

exports.authorize = async (token) => {
	return await firebaseAuth.authToken(token);
}

exports.finishAuth = async (uid) => {
	return await firebaseAuth.revokeToken(uid)
}

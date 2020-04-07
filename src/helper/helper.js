'use strict'

const cors = require('cors');

const options = {
  "allowedHeaders": ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "x-auth-id", "x-auth-uid"],
  "credentials": true,
  "methods": "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  "origin": "*",
  "preflightContinue": false
};

exports.proxyCors = options;
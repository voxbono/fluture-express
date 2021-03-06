'use strict';

const {Next} = require ('../..');
const Future = require ('fluture');

module.exports = (req, locals) => Future.of (Next (Object.assign ({
  session: {id: req.headers['x-authenticated-user']},
}, locals)));

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile');
var environmentConfig = config[environment];
var knex = require('knex');
var connection = knex(environmentConfig);

module.exports = connection;
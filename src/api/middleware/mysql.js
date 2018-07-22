'use strict';

/**
 * Dependencies
 */

var mysql = require('mysql2/promise');

var mysqlPool = mysql.createPool({
 host: process.env.MYSQL_HOST,
 user: process.env.MYSQL_USER,
 password: process.env.MYSQL_PASSWORD,
 database: process.env.MYSQL_DATABASE
});

/**
 * [exports description]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {Promise}       [description]
 */
module.exports = function(req, res, next) {
 req.mysqlPool = mysqlPool;
 next();
};

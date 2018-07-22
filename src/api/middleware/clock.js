'use strict';

/**
 * Dependencies
 */

var moment = require('moment');

/**
 * [exports description]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {Promise}       [description]
 */
module.exports = function(req, res, next) {
 req.timestamp = moment.utc().format();
 next();
};

'use strict';

var _ = require('lodash');

/**
 * Dependencies
 */

module.exports = function(req, res, next) {
  // console.log(req.pathname);
  // console.log(req.url.pathname);

  var result = {
    timestamp: req.timestamp
  };
  var api_key = process.env.API_KEY,
    sec_key = process.env.SEC_KEY;
  var key = req.headers.key,
    secret = req.headers.secret;

  if (api_key === key && sec_key === secret) {
    return next();
  } else {
    _.assign(result, {
      error: 'unauthorized request'
    });
    _.assignIn(res, {
      statusCode: 401
    });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  }
};

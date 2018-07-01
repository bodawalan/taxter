'use strict';

var SwaggerConnect = require('swagger-connect');
var app = require('connect')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};


app.use(require('./api/middleware/clock.js'));

app.use(require('./api/middleware/mysql.js'));


app.use(require('./api/middleware/options.js'))

app.use(require('./api/middleware/key.js'));



SwaggerConnect.create(config, function(err, swaggerConnect) {
  if (err) { throw err; }

  // install middleware
  swaggerConnect.register(app);

  var port = process.env.PORT || 80;
  app.listen(port);
  if (swaggerConnect.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

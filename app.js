#!/usr/bin/env node

var express = 	    require('express');
var bodyParser =    require('body-parser');
var app = 		      express();
var router =        express.Router();
var models = 	      require("./models");
var routeMaps  =    require('./routes');
var Sequelize =     require("sequelize");
var env       =     process.env.NODE_ENV || "development";
var config    =     require(__dirname + '/config/config.json')[env];
var sequelize =     new Sequelize(config.database, config.username, config.password, config);

app.set('port', process.env.PORT || 3000);

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

models.init(sequelize);

sequelize.sync({force: false}).then(function () {
  var paths = routeMaps.set(router, models);
  app.use('/api', paths);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});
#!/usr/bin/env node
var _ = require('underscore');
var express = 	    require('express');
var bodyParser =    require('body-parser');
var app = 		      express();
var router =        express.Router();
var compression =   require('compression')
var controllers  =    require('./controllers');
var Sequelize =     require("sequelize");
var env       =     process.env.NODE_ENV || "development";
var config    =     require(__dirname + '/config/config.json')[env];
var sequelize =     new Sequelize(config.database, config.username, config.password, config);
var models =        require("./models")(sequelize);

app.set('port', process.env.PORT || 3000);

// parse application/json
app.use(bodyParser.json());

// one day (in miliseconds)
var oneDay = 86400000;

//compress data connection
//app.use(compression());

//serve public folder
app.use('/', express.static(__dirname + '/public', { maxAge: oneDay }));

//setting up sequelizer (orm)
sequelize.sync({force: false}).then(function () {
  
  var paths = controllers.set(router, models);
  app.use('/api', paths);

  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });

});
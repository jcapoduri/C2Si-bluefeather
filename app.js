#!/usr/bin/env node

var express = 	    require('express');
var bodyParser =    require('body-parser');
var app = 		      express();
var router =        express.Router();
var models = 	      require("./models");
var controllers  =  require('./controllers');
var routes  =       require('./routes');

app.set('port', process.env.PORT || 3000);

// parse application/json
app.use(bodyParser.json());

//static content
app.use('/', express.static(__dirname + '/mockups'));


models.sequelize.sync(/*{force: true}*/).then(function () {
  var paths = routes.set(router, models);
  app.use('/api', paths);
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});
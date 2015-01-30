#!/usr/bin/env node

var express = 	require('express');
var app = 		express();
var models = 	require("./models");

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.send('Hello World!')
});

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});
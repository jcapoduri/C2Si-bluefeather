"use strict";

var fs =    require("fs");
var path =  require("path");
var db =    {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = require(path.join(__dirname, file));
    var modelname = file.split('.')[0];
    db[modelname] = model;
  });

function setup(app, options) {
  var item;
      
  for (item in db) {
    if (item != "setup") db[item].set(app);
  };
};

db.setup = setup;

module.exports = db;
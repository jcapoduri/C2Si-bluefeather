"use strict";

var fs        = require("fs");
var path      = require("path");

module.exports = function(sequelize) {
  var db        = {};

  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      var model = sequelize["import"](path.join(__dirname, file));
      db[model.name] = model;
    }.bind(this));
  
  Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });  

  return db;
  
};;
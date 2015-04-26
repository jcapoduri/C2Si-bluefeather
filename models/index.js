"use strict";

var fs        = require("fs");
var path      = require("path");
var db        = {};

db.init = function(sequelize) {
  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
      var model = sequelize["import"](path.join(__dirname, file));
      this[model.name] = model;
    }.bind(this));
  
  Object.keys(db).forEach(function(modelName) {
    if ("associate" in this[modelName]) {
      this[modelName].associate(db);
    }
  });  
  
};

module.exports = db;
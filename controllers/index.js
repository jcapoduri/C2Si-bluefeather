"use strict";

var fs =    require("fs");
var path =  require("path");
var db =    [];

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = require(path.join(__dirname, file));
    db[] = model;
  });

module.exports.set = function (app, options) {
  var i,
      len = db.length;
      
  for (i = 0; i < len; i++) {
    db[i].set(app);
  };
};
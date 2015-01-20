"use strict";

module.exports = function(sequelize, DataTypes) {
  var Workorder = sequelize.define("Workorder", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //Workorder.hasMany(models.Task)
      }
    }
  });

  return Workorder;
};
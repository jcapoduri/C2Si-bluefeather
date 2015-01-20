"use strict";

module.exports = function(sequelize, DataTypes) {
  var Ringing = sequelize.define("Ringing", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //Ringing.hasMany(models.Task)
      }
    }
  });

  return Ringing;
};
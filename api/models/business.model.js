"use strict";

module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //User.hasMany(models.Task)
      }
    }
  });

  return Business;
};
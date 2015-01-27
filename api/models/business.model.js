"use strict";

module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Business.hasMany(models.Job);
        Business.hasMany(models.User);
        Business.hasMany(models.Ringing);
        Business.hasMany(models.Book);
      }
    }
  });

  return Business;
};

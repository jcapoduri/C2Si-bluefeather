"use strict";

module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    sfcost: DataTypes.FLOAT,
    dfcost: DataTypes.FLOAT,
    csfcost: DataTypes.FLOAT,
    cdfcost: DataTypes.FLOAT,
    isfcost: DataTypes.FLOAT,
    idfcost: DataTypes.FLOAT,
    icsfcost: DataTypes.FLOAT,
    icdfcost: DataTypes.FLOAT
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

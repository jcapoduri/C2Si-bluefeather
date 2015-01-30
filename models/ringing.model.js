"use strict";

module.exports = function(sequelize, DataTypes) {
  var Ringing = sequelize.define("Ringing", {
    nombre: DataTypes.STRING,
    number: DataTypes.INTEGER,
    cost: DataTypes.DECIMAL  
  });

  return Ringing;
};
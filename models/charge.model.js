"use strict";

module.exports = function(sequelize, DataTypes) {
  var Charge = sequelize.define("Charge", {   
    quantity: DataTypes.INTEGER, 
    price: DataTypes.DECIMAL
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Charge.hasOne(models.Fee, {as: 'fees'});
      }
    }
  });

  return Charge;
};
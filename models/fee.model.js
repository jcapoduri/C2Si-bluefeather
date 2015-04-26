"use strict";

module.exports = function(sequelize, DataTypes) {
  var Fee = sequelize.define("Fee", {    
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    doNotUse: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        //Book.hasMany(models.Book, {as: 'books'});
      }
    }
  });

  return Fee;
};
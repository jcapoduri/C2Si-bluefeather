"use strict";

module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {    
    name: DataTypes.STRING,
    email: DataTypes.STRING,
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

  return Client;
};
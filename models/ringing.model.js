"use strict";

module.exports = function(sequelize, DataTypes) {
  var Ringing = sequelize.define("Ringing", {
    nombre: DataTypes.STRING,
    number: DataTypes.INTEGER,
    cost: DataTypes.DECIMAL  
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
 
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
 
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true
  });

  return Ringing;
};
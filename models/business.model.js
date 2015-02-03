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
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
 
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
 
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,
    classMethods: {
      associate: function(models) {
        Business.hasMany(models.Job, {as: 'Jobs'});
        Business.hasMany(models.User, {as: 'Users'});
        Business.hasMany(models.Ringing, {as: 'Ringings'});
        Business.hasMany(models.Book, {as: 'Books'});
      }
    }
  });

  return Business;
};

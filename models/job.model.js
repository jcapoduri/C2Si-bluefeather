"use strict";

module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {    
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    ignore: DataTypes.BOOLEAN,
    deliveryDate: DataTypes.DATE,
    kind: DataTypes.ENUM('delCliente', 'deArchivo', 'lista')
  }, {
    classMethods: {
      associate: function(models) {
        Job.hasMany(models.Workorder);
        Job.hasMany(models.Book);
        Job.hasOne(models.User, {as: 'userOwner', foreignKey : 'userOwnerId'});
      }
    }
  });

  return Job;
};
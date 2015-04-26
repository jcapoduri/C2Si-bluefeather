"use strict";

module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    description: DataTypes.STRING,  
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    ignore: DataTypes.BOOLEAN,
    deliveryDate: DataTypes.DATE,
    kind: DataTypes.ENUM('delCliente', 'deArchivo', 'lista')
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Job.hasMany(models.Workorder);        
        Job.hasOne(models.Client, {as: 'client', foreignKey : 'ClientId'});
        Job.hasOne(models.Book, {as: 'selectedBook', foreignKey : 'BookId'});
        Job.hasOne(models.User, {as: 'userOwner', foreignKey : 'userOwnerId'});
      }
    }
  });

  return Job;
};
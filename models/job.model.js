"use strict";

module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {    
    title: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    ignore: DataTypes.BOOLEAN,
    deliveryDate: DataTypes.DATE,
    kind: DataTypes.ENUM('delCliente', 'deArchivo', 'lista')
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
        Job.hasMany(models.Workorder);
        Job.hasOne(models.Book, {as: 'selectedBook', foreignKey : 'BookId'});
        Job.hasOne(models.User, {as: 'userOwner', foreignKey : 'userOwnerId'});
      }
    }
  });

  return Job;
};
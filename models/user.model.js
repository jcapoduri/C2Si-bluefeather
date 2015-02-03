"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.Job);
        User.belongsToMany(models.Business, {through: 'BusinessUser'});
      }
    }
  });

  return User;
};
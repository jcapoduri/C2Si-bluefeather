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
    classMethods: {
      associate: function(models) {
        console.log(User.belongsToOne);
        User.belongsTo(models.Job);
      }
    }
  });

  return User;
};
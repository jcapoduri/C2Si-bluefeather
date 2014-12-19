"use strict";

module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Job.hasMany(models.Task)
      }
    }
  });

  return Job;
};
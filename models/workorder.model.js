"use strict";

module.exports = function(sequelize, DataTypes) {
  var Workorder = sequelize.define("Workorder", {    
    state: DataTypes.ENUM('Waiting', 'Fotocopiando', 'Anillando', 'Finished', 'Delivered', 'Recycled'),
    howTo: DataTypes.ENUM('TwoinOneDF', 'TwoinOneSF', 'toDF', 'toSF', 'HHDF', 'HHSF', 'likeThat'),
    ringing: DataTypes.ENUM('nope', 'top', 'side', 'bottom'),
    copies: DataTypes.INTEGER,
    withRinging: DataTypes.BOOLEAN,
    isLista: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE,

    senna: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Workorder.belongsTo(models.Job);
        Workorder.hasMany(models.Charge);
      }
    }
  });

  return Workorder;
};
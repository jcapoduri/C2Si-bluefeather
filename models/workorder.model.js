"use strict";

module.exports = function(sequelize, DataTypes) {
  var Workorder = sequelize.define("Workorder", {
    client: DataTypes.STRING,
    description: DataTypes.STRING,
    state: DataTypes.ENUM('Waiting', 'Fotocopiando', 'Anillando', 'Finished', 'Delivered', 'Recycled'),
    howTo: DataTypes.ENUM('TwoinOneDF', 'TwoinOneSF', 'toDF', 'toSF', 'HHDF', 'HHSF', 'likeThat'),
    ringing: DataTypes.ENUM('top', 'side', 'bottom'),
    copies: DataTypes.INTEGER,
    withRinging: DataTypes.BOOLEAN,
    doComplete: DataTypes.BOOLEAN,
    isLista: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE,
    ringingCost: DataTypes.FLOAT,

    sfcount: DataTypes.INTEGER,
    dfcount: DataTypes.INTEGER,
    csfcount: DataTypes.INTEGER,
    cdfcount: DataTypes.INTEGER,
    isfcount: DataTypes.INTEGER,
    idfcount: DataTypes.INTEGER,
    icsfcount: DataTypes.INTEGER,
    icdfcount: DataTypes.INTEGER,

    sfcost: DataTypes.FLOAT,
    dfcost: DataTypes.FLOAT,
    csfcost: DataTypes.FLOAT,
    cdfcost: DataTypes.FLOAT,
    isfcost: DataTypes.FLOAT,
    idfcost: DataTypes.FLOAT,
    icsfcost: DataTypes.FLOAT,
    icdfcost: DataTypes.FLOAT,

    senna: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        Workorder.belongsTo(models.Job);
      }
    }
  });

  return Workorder;
};
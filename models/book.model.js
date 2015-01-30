"use strict";

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {    
    title: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    ignore: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Book.hasMany(models.Book, {as: 'books'});
      }
    }
  });

  return Book;
};
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {    
    title: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    ignore: DataTypes.BOOLEAN
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
        Book.hasMany(models.Book, {as: 'books'});
      }
    }
  });

  return Book;
};
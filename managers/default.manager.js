"use strict"

module.exports.set = function (opts, callback) {
  var ownModel = opts.model,
      sequelize = opts.sequelize;

  function getAll() {
    return ownModel;
  };

  function getById(id) {};

  function post(jsondata) {};

  function put(id, jsondata) {};

  function deleteItem(id) {};

  return {
    getAll: getAll,
    getById: getById,
    post: post,
    put: put,
    deleteItem: deleteItem
  };
};
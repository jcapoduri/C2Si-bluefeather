"use strict"

var models = require('../models'),
    currentModel = null;

function getAll() {
  if (!currentModel) return [];
  
};

function getById(id) {};
function post(jsondata) {};
function put(id, jsondata) {};
function deleteItem(id) {};

function setCurrentModel (modelname) {
  currentModel = modelname
};

module.exports = {
  getAll: getAll,
  getById: getById,
  post: post,
  put: put,
  deleteItem: deleteItem,
  setModel: setCurrentModel
};

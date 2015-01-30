
// load models
/*var models = [
'dev'
];

models.forEach( function (module) {
    module.exports[model] = sequelize.import(__dirname + '/' + module);
});*/
  
var currConf = require('dev.js');

module.exports = currConf;
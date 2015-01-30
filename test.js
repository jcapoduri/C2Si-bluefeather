var Sequelize = require('sequelize');

try {
    var sequelize = new Sequelize('shaka_bluesystem', 'shaka_ShakaBahia', 'abcd1234',
    {
        'dialect': 'mysql',
        'host': 'c2si.com.ar',

    });
    sequelize.query("select * from books").success(function(myTableRows) {
      console.log(myTableRows)
    })

} catch (a) {
    console.log(a);
}
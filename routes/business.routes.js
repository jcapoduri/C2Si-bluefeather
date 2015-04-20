var _ = require('underscore');

module.exports.set = function (router, models) {
  router.get('/business', function (req, res) {
    var businessModel = models.Business;
    businessModel.all().then(function (business) {
      var result = _.map(business, function(item) {
        return item.toJSON();
      });
      result.push(businessModel.create());
      res.json(result);
    });
  });

  router.get('/business/:id', function (req, res) {

  });

  router.post('/business', function (req, res) {
    var businessModel = models.Business;
    businessModel.create(req.body).then(function (task) {
      res.end(task.id);
    });
    console.log(JSON.stringify(req.body, null, 2));    
  });

  router.put('/business/:id', function (req, res) {

  });
}
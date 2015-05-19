var _ = require('underscore');

module.exports.set = function (router, models) {
  var feeModel = models.Fee;
  
  router.get('/fee', function (req, res) {
    feeModel.all().then(function (fee) {
      var result = _.map(fee, function(item) {
        return item.toJSON();
      });
      res.json(result);
    }).catch(function (e) {
      res.json(e);
    });
  });

  router.get('/fee/:id', function (req, res) {
    feeModel.findOne(req.params.id).then(function (data) {
      res.json(data);
    }).catch(function (e) {
      res.json(e);
    });
  });

  router.post('/fee', function (req, res) {
    feeModel.create(req.body).then(function (data) {
      res.status(201).end();
    }).catch(function (e) {
      res.json(e);
    });
  });

  router.put('/fee/:id', function (req, res) {
    feeModel.findOne(req.params.id).then(function (data) {
      data.updateAttributes(req.body);
      res.status(202).end();
    }).catch(function (e) {
      res.json(e);
    });
  });
}
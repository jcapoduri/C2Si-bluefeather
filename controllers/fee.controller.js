module.exports.set = function (router, models) {
  router.get('/fee', function (req, res) {
    var feeModel = models.Fee;
    feeModel.all().then(function (fee) {
      var result = _.map(fee, function(item) {
        return item.toJSON();
      });
      result.push(feeModel.create());
      res.json(result);
    });
  });

  router.get('/fee/:id', function (req, res) {

  });

  router.post('/fee', function (req, res) {
    
  });

  router.put('/fee/:id', function (req, res) {

  });
}
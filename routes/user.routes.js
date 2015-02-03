module.exports.set = function (router, models) {
  router.get('/user', function (req, res) {

  });

  router.get('/user/:id', function (req, res) {

  });

  router.post('/user', function (req, res) {
    var User = models.User;
    User.create(req.body).then(function (user) {
      
    });
  });

  router.put('/user/:id', function (req, res) {

  });
}
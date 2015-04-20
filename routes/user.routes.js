module.exports.set = function (router, models) {
  router.get('/user', function (req, res) {
    var User = models.User;
    User.findAll().then(function(users) {
      console.log(users);
      res.json(users.toJSON());
    });
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
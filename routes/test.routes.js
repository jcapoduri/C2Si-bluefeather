module.exports.set = function (router, controllers) {
  router.get('/test', function (req, res) {

  });

  router.get('/test/:id', function (req, res) {

  });

  router.post('/test', function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.end(JSON.stringify(req.body, null, 2))
  });

  router.put('/test/:id', function (req, res) {

  });
}
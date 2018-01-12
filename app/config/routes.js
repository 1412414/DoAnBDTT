var router = require('express').Router;
var controllers = require('../../app/controllers');

module.exports = function(app) {
  var homeRoutes = router()
    .get('/', controllers.home.index)
    .get('/example', controllers.home.example);

  app.use('/', homeRoutes);

};

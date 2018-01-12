var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(express.static('public'));
  app.use('/bower_components', express.static('bower_components'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));
};
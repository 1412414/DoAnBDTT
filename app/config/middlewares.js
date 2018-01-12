var bodyParser = require('body-parser');

module.exports = function(app, express) {
  app.use(express.static('public'));
  app.use('/bower_components', express.static('bower_components'));
  app.use('/node_modules', express.static('node_modules'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));
};

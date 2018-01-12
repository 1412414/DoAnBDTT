module.exports = function(app, express) {
  require('./middlewares')(app, express);

  require('./views')(app);

  require('./routes')(app);
};
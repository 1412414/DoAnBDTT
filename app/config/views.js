var exphbs = require('express-handlebars');
var path = require('path');
var express = require('express');

module.exports = function (app) {
  app.engine('hbs', exphbs({
      extname: '.hbs',
      layoutsDir: path.resolve('app/views/layouts/'),
      partialsDir: path.resolve('app/views/partials/')
  }));

  app.set('view engine', '.hbs');

  app.set('views', path.resolve('app/views'));
};
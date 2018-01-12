var homeController = {
  index: function(req, res) {
      res.render('home/index');
  },
  example: function(req, res) {
    res.render('home/example');
  }
};

module.exports = homeController;

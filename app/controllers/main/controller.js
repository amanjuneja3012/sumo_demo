var request = require('request');

module.exports = {
    render: function(req, res) {
      res.render('main.ejs', {});
    }
};
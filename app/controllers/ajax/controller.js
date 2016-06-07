var request = require('request');
var services = require(_dir.DIR_SERVICES)

module.exports = {
    helloworld: function(req, res) {
        res.send("Hello World !!");
    },
    news: function (req, res) {
      var url = "https://read-api.newsinshorts.com/v1/news/" + req.query.hash_id;
      console.log('#######' + url);
      request({
          headers: {
              'Content-Type': 'application/json'
          },
          url: url,
          method: 'GET'
      }, function(err, response, body) {
          res.status(response.statusCode).send(body);
      });
    }
};
module.exports = function(app) {
  var base_url = (env == 'production' ? "https://article-repository-read.newsinshorts.com" : "https://article-repository-staging.newsinshorts.com");
  var request = require('request');

  function getData(req, res, lang, parent, hashid) {
      var path = lang + '/v1/article/vendor';
      var url = base_url + '/' + path + '/' + parent + '/hash_id/' + hashid;
      request(url, function(error, response, body) {
          if (!error) {
              var data = {};
              try {
                  data = JSON.parse(body)
              } catch (e) {
                  data = {};
              }
              res.render('user_events.ejs', {
                  news: data,
                  moment: require('moment')
              });
          }
      });
  }

  app.get('/redirect', function(req, res) {
      var url = req.query.url;
      if (url) {
          res.redirect(url);
      } else {
          res.status(404).send('Not Found');
      }
  });

  app.get('', function(req, res) {
      getData(req, res, "en", req.params.parent, req.params.hashid);
  });
};


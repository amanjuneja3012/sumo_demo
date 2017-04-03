var express = require('express');
var app = express();

//setup app scope variables
require('./app/globals')();

//grab routes and services
var routes = require(_dir.DIR_APP + '/routes');
var services = require(_dir.DIR_SERVICES);

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(function (err, req, res, next) { 
  res.status(err.status || 500); res.send('error'); console.log(err); 
});

// load our routes and pass in our app and fully configured passport
routes(app);

// launch ======================================================================
var server = app.listen(process.env.PORT || 5000)

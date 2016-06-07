var express = require('express');
var app     = express();
var port  = 34200;
var minify  = require('express-minify');

app.set('view engine','ejs');

app.get("/health",function(req,res){
  res.send("Application is working correctly");
});
app.use(function (err, req, res, next) { 
  res.status(err.status || 500); res.send('error'); console.log(err); 
});
app.use('/assets', express.static(__dirname + '/assets'));
app.get("/health",function(req,res){res.send("Application is up and running!!");})
require('./routes.js')(app);

var server  = app.listen(port)
console.log('Listen on port number '+ port) 
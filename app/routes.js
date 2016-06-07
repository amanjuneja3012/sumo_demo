var controllers = require(_dir.DIR_CONTROLLERS);
var express = require('express');

module.exports = function(app) {
    
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use('/ajax/', controllers.ajaxController);
    app.get("/health", function(req, res) {
        res.send("Application is up and running!!");
    });
    app.get("/*", function(req, res) {
        res.send("*******************####*******************");
    });
};
var controllers = require(_dir.DIR_CONTROLLERS);
var express = require('express');

module.exports = function(app) {

    app.use('/dist/', express.static(__dirname + '/dist'));
    app.use('/ajax/', controllers.ajaxController);
    app.use('/', controllers.mainController);
    app.get("/health", function(req, res) {
        res.send("Application is up and running!!");
    });
};
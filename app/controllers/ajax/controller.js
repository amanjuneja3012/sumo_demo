var request = require('request');
var services = require(_dir.DIR_SERVICES)

module.exports = {
    helloworld: function(req, res) {
        res.send("Hello World !!");
    }
};
module.exports = function() {
    var dir = {};
    dir.DIR_APP = __dirname;
    dir.DIR_CONTROLLERS = dir.DIR_APP + '/controllers';
    dir.DIR_SERVICES = dir.DIR_APP + '/services';
    dir.TEMP = dir.DIR_APP + '/temp';

    global._dir = dir;
    global._config = require('../config');
};
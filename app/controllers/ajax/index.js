var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/helloworld', controller.helloworld);

module.exports = router;

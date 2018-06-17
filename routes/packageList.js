var express = require('express');
var router = express.Router();
var packageList = require('../controller/packageList')

/* GET users listing. */
router.get('/', packageList);

module.exports = router;

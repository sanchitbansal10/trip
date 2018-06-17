var express = require('express');
var router = express.Router();
var packageDetails = require('../controller/packageDetails')

/* GET users listing. */
router.get('/', packageDetails);

module.exports = router;

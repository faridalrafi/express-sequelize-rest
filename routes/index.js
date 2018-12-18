var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/polls', function(req, res, next) {
  res.send('respond with polls');
});

module.exports = router;

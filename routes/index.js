
var express = require('express');
var router = express.Router();
production=false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;

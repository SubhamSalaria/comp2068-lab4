var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/subham', function(req, res, next) {
    res.render('subham', { title: 'subham' });
});

router.get('/Abhishek', function(req, res, next) {
    res.render('Abhishek', { title: 'Abhishek' });
});

router.get('/Arjun', function(req, res, next) {
    res.render('Arjun', { title: 'Arjun' });
});

router.get('/Ashish', function(req, res, next) {
    res.render('Ashish', { title: 'Ashish' });
});

module.exports = router;

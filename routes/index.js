var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));

});
/* get contact us page */
router.get('/contactUs', function(req,res){
  /* res.sendFile(path.join(__dirname + '/../public/contact-us.html')); */
  
  res.render('contact-us',{forHeader:req.session.name})
})
 /* get about us page */
router.get('/aboutUs', function(req,res){
  /* res.sendFile(path.join(__dirname + '/../public/about-us.html')); */
  res.render('about-us',{forHeader:req.session.name})
})

router.get('/index', function(req,res){
  /* res.sendFile(path.join(__dirname + '/../public/about-us.html')); */
  res.render('index',{forHeader:req.session.name})
})
module.exports = router;

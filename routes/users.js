var express = require('express');
var router = express.Router();
var { registerNewUser, loginUser, showDashboard,showCart, logoutUser, paytm} = require('../controller/userControl');


//render form-login page
router.get('/', function(req, res, next) {
  res.render('login-register', {showRegister:true})
});

//register new user
router.post('/register', registerNewUser);

//login user
router.get('/login', loginUser);


//show dashboard
router.get('/dashboard', showDashboard)

//show cart
router.get('/cart',showCart)

//logout  user
router.get('/logout', logoutUser)

//show paytm page
router.get('/paytm', paytm)

module.exports = router;

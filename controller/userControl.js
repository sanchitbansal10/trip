const mongoose = require('mongoose')
var User = require('../models/user')

//controller to register new user
var registerNewUser =function(req,res){
    /* console.log('registerNewUSer called')
    console.log(req.body) */
    var userInput = {
        emailAddress : req.body.emailAddress,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        mobile : req.body.mobile,
        password : req.body.password
    }
    //checks for already existing user with given emailid
    /* User.find({email:userInput.email},(err,data) => {
        if(data){
            res.render('login-register', {registerStatus:'User with this email id already exist',forHeader:req.session.name})
        }
        else { */
            //checks for already registered mobile number
            /* User.find({mobile:userInput.mobile},(err,data) => {
                if(data){
                    res.render('login-register', {
                        registerStatus:'User with this mobile number already exist',
                        showRegister:true,
                        forHeader:req.session.name
                })
                }
                else { */
                     //saving new registered user
                    var user = new User(userInput);
                    user.save(function(err,data){
                        if(err){
                        console.log('error in saving')
                        }
                        if(data){
                            res.render("login-register",{status:'please login with the registered credentials',forHeader:req.session.name})
                        }
                    })
                }/* 
            });
        }      */
    

//login a user
var loginUser = function(req, res){
    console.log('loginUser called')
    var userInput = {
        emailAddress : req.query.emailAddress,
        password : req.query.password
    }
    console.log(userInput)
    User.findOne(userInput,function(err,data){
        //if error that means our server had something bad going on if !data means couldnot find any saved document with the submited details
      if(err){
          res.render("login-register",{status:'Sorry, we couldnot connect you in there is some problem with our server',forHeader:req.session.name})
    }
    if(!data){
        //render login page again with warning 
        res.render("login-register",{status:'Incorrect email or password',forHeader:req.session.name})
      }
      else {
        console.log(data)
        req.session.userId = data._id;
        req.session.name=data.firstName;
        res.redirect('/users/dashboard')
      }; 
    })
}
//show dashboard
var showDashboard = function(req, res, next){
    if(!(req.session && req.session.userId)) {
        console.log('Sending you back to login you fucking asshole')
        res.redirect('/users')
    }
    else{
        User.findById(req.session.userId, function(err, data){
            if(err){
                return console.log('can"t find user')
            }

            if(!data){
                res.redirect('/users')
            }

            delete data["password"]
            console.log(req.session)
            res.render('dashboard',{packagesBought:data.packagesBought,forHeader:req.session.name})
        })
    }
}

var showCart = function(req, res, next){
    if(!(req.session && req.session.userId)) {
        console.log('Sending you back to login you fucking asshole')
        res.redirect('/users')
    }
    else{
        User.findById(req.session.userId, function(err, data){
            if(err){
                return console.log('can"t find user')
            }
    
            if(!data){
                res.redirect('/users')
            }
    
            delete data["password"]
            console.log(data.cart)
            res.render('cart',{"data":data.cart,forHeader:req.session.name})  //data.cart is the array having object of differenet packages
        })
    }
}

var logoutUser = function(req, res, next){
    if(req.session && req.session.userId){
        req.session.reset();
        res.redirect('/')
    }
    else{
        alert('user not logged in')
    }
}

var paytm = function(req, res, next){
    res.render('paytm',{forHeader:req.session.name})
}

module.exports = {registerNewUser, loginUser, showDashboard, showCart, logoutUser, paytm}



/* notes: here database of user is acessed by User because i imported the modal as that in the model.  */
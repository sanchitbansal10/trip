const mongoose = require('mongoose')
var packages = require('../models/package')


var packageListControl =function(req,res){
  packages.find({},function(err,data){
      console.log('nabsd')
    if(err){
      res.send({error:'technical problem in the server'})
    }
    res.render('package-list',{
      data:data,
      forHeader:req.session.name
    })
  });
}


module.exports = packageListControl
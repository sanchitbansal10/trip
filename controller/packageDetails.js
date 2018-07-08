const mongoose = require('mongoose')
var details = require('../models/packageDetails')


var packageDetailsControl =function(req,res){
  let id = req.query.id;
  details.find({packageId:id},function(err,data){
    if(err){
      console.log('cant find')
    }
    console.log(data[0])
     res.render('packageDetails',{
      location:data[0].location,
      startDate:data[0].startDate,
      endDate:data[0].endDate,
      price:data[0].price,
      overview:data[0].overview,
      inclusive:data[0].inclusive,
      exclusive:data[0].exclusive,
      itinerary:data[0].itinerary,
      notes:data[0].notes,
      infographics:data[0].infographics,
      timeFrame:data[0].timeFrame,
      forHeader:req.session.name
    }) 
  });
  
}


module.exports = packageDetailsControl





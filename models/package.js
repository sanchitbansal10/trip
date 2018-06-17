'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var Package = new Schema({
    "packageId":String,
    "location":String,
    "tripType":String,
    "price":Number,
    "hotelRating":Number,
    "duration":Number,
    "startDate":String,
    "endDate":String,
    "popularity":Number
})

 
module.exports = mongoose.model('packages',Package)
'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var User = new Schema({
    "firstName" : String,
    "lastName" : String,
    "password" : String,
    "emailAddress" : String,
    "mobile" : String,
    "packagesBought" : [{
        "packageId" : String,
        "price": Number,
        "numberOfPackages": Number,
        "location" : String,
        "totalPaid" : Number,
        "uniqueId" : String
    }],
    "cart" : [{
        "packageId": String,
        "location": String,
        "numberOfPackages": Number,
        "price": Number
    }]
})

 
module.exports = mongoose.model('user',User)
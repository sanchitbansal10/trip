'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var User = new Schema({
    "firstName" : String,
    "lastName" : String,
    "password" : String,
    "emailAddress" : String,
    "mobile" : String,
    "packagesBought" : {
        type:[{
        "packageId" : String,
        "price": Number,
        "numberOfPackages": Number,
        "location" : String,
        "totalPaid" : Number,
        "uniqueId" : String
        }],
        default: []
    }
})

 
module.exports = mongoose.model('user',User)
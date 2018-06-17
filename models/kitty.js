'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var Kitty = new Schema({
    "name": String
})

 
module.exports = mongoose.model('kitty',Kitty)
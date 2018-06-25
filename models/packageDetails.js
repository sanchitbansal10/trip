'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



/* var ItinerarySchema = new Schema({
    daily:[String]
}) */

/* var Itinerary = mongoose.model('Itinerary', ItinerarySchema) */
//package details schema

var Details = new Schema({
    packageId:String,
    location:String,
    tripType:String,
    price:Number,
    timeFrame:String,
    hotelRating:Number,
    duration:Number,
    startDate:String,
    endDate:String,
    itinerary:[[String]],
    inclusive:[String],
    exclusive:[String],
    overview:String,
    notes : String,
    infographics:[String]
})



module.exports = mongoose.model('details', Details)



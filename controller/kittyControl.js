
var mongoose = require('mongoose')
var Schema = mongoose.Schema;



var Kitty = new Schema({
    "name": String
})

 
kitty= mongoose.model('kitty',Kitty)


var kittyControl =function(req,res){
  console.log('kittycontrol callled')
  kitty.findOne({},function(err,data){
    if(err){
      console.log('cant find')
    }
    console.log(data)
    res.send(data)
  });
}


module.exports = kittyControl
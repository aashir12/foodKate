const mongoose = require('mongoose');




  const schema1=mongoose.Schema({
    name:String,
    email:String,
    qty:String,
    size:String,
    action:String,
    time: {
      type: Date,
      default: Date.now
  },
    total:Number,
    img:String
  })



  module.exports=mongoose.model('data',schema1)
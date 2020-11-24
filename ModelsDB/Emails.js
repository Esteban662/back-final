const mongoose = require('mongoose');

const emailSchema= new mongoose.Schema({
    
    email: String,
    name: String  
  })

module.exports= mongoose.model('emails', emailSchema);
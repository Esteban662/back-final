const mongoose = require('mongoose');

const emailSchema= new mongoose.Schema({
    
    email: String,
    token: String  
  })

module.exports= mongoose.model('emails', emailSchema);
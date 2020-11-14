const mongoose = require('mongoose');

const imagenSchema= new mongoose.Schema({
  texto: String,
  imgUrl: String  
})







module.exports= mongoose.model('Imagen', imagenSchema)

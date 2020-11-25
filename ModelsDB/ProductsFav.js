const mongoose = require('mongoose');

const favoriteSchema =  new mongoose.Schema({
    imgUrl: String,
    categoria: String,
    producto: String,
    precio: Number,
    descuento: Number,
    descripcion:String,
    color:String
  })


const favoriteModel = mongoose.model('favorites', favoriteSchema);

module.exports = favoriteModel;
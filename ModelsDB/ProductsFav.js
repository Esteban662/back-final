const mongoose = require('mongoose');

const favoriteSchema =  new mongoose.Schema({
    imgUrl: String,
    categoria: String,
    producto: String,
    precio: Number,
    descuento: Number

  })


const favoriteModel = mongoose.model('favorites', favoriteSchema);

module.exports = favoriteModel;
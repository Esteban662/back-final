const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    tittle: String,
    imgUrl: String,
    categoria: String,
    codigo: Number,
    producto: String,
    descripcion: String,
    dimension: String,
    color: String,
    precio: Number,
    descuento: Number

  })


const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
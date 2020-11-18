const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    imgUrl: String,
    categoria: String,
    codigo: Number,
    producto: String,
    descripcion: String,
    marketing: String,
    dimension: String,
    color: String,
    precio: Number,
    descuento: Number

  })


const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
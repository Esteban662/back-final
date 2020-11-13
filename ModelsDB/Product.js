const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
    categoria: String,
    código: Number,
    producto: String,
    descripción: String, 
    marketing: String, 
    dimensión: Number,
    color: String, 
    precio: Number,
    descuento: Number
    
})
 
const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
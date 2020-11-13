const express = require('express');


const product_controller = require('./controllers/product');



const api= express.Router()


// Ruta Productos
api.get('/productos', product_controller.getAllProducts);






module.exports= api;
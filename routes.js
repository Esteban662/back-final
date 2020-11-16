const express = require('express');
const imagen = require('./controller/images');


const product_controller = require('./controller/product');



const api= express.Router()


// Ruta Productos
api.get('/productos', product_controller.getAllProducts);
api.get('/categoria', product_controller.getProductLiving)



//Ruta Imagenes

api.get('/images', imagen.getAllImages)

//Ruta Redes Sociales

//api.get('/redes_sociales', redessociales_controller.getAllRedes)

//Ruta Texto






module.exports= api;
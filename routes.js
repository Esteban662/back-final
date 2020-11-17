const express = require('express');

const imagen_controller = require('./controller/images');
const product_controller = require('./controller/product');
const socialMedia_controller= require('./controller/redesSociales');
const textMarketing_controller= require ('./controller/textoMarketing')

const api= express.Router();

// SE DEFINEN LAS RUTAS PARA API Y SE EJECUTAN CONTROLADORES


// Ruta Productos
api.get('/productos', product_controller.getAllProducts);
api.get('/productos/:categoria', product_controller.getProductCategory);

//Ruta Imagenes
api.get('/images', imagen_controller.getAllImages);


//Ruta Redes Sociales
api.get('/socialMedia', socialMedia_controller.getAllSocialMedia);
api.post('/socialMedia', socialMedia_controller.addSocialMedia);



//Ruta Texto Marketing
api.get('/description', textMarketing_controller.getText);

module.exports= api;
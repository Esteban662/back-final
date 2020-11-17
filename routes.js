const express = require('express');

const imagen_controller = require('./controller/images');
const product_controller = require('./controller/product');
const socialMedia_controller= require('./controller/redesSociales');
const textMarketing_controller= require ('./controller/textoMarketing');
const contact_controller = require('./controller/contacts');


const validations = require('./validations/validate');

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
api.get('/textMarketing', textMarketing_controller.getText);

//Ruta Contactos
api.get('/contactForm', contact_controller.getContacts);
api.post('/contactForm/', validations.contactValidate, contact_controller.setContact);

module.exports= api;
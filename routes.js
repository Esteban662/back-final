const express = require('express');

const imagen_controller = require('./controller/images');
const product_controller = require('./controller/product');
const socialMedia_controller= require('./controller/redesSociales');
const textMarketing_controller= require ('./controller/textoMarketing');
const contact_controller = require('./controller/contacts');
const email_controller = require('./controller/emails');
const sucursales_controller = require('./controller/sucursales');
const favorite_controller = require('./controller/productsFav');
const newCategory_controller = require('./controller/newCategory')


const validations = require('./validations/validate');

const api= express.Router();

// SE DEFINEN LAS RUTAS PARA API Y SE EJECUTAN CONTROLADORES


// Ruta Productos
api.get('/productos', product_controller.getAllProducts);
api.get('/productos/:categoria', product_controller.getProductCategory);
api.get('/sugeridos', favorite_controller.getAllFavoriteProducts);
api.get('/productos/:categoria/:producto', product_controller.getProductClass);
api.get('/productos/:categoria/:producto/:id', product_controller.getProductById)
//api.get('/productos/:categoria/:producto', product_controller.getProduct);

// Ruta  Nueva Categoria
api.get('/categorias', newCategory_controller.getAllCategories);
api.get ('/categorias/:categoria', newCategory_controller.getNewCategory);

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

//Ruta Email
api.post('email/', validations.emailValidate, email_controller.setEmailData);

//Ruta Sucursales
api.get ('/sucursales', sucursales_controller.getAllStores)

module.exports= api;
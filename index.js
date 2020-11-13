// IMPORTO DEPENDENCIAS

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const nodemon = require('nodemon');
const cors = require('cors');

// IMPORTO CONFIGURACION (Conexión)  --- IMPORTO RUTAS 
const config = require('./config');
const api = require('./routes');

//INSTANCIO APP EXPRESS
const app= express();

app.use(morgan("combined"))
app.use(cors())

// PARSEO 
app.use(express.json())

app.use('/api', api)



// CONEXION 

mongoose.connect(config.atlas_route, (err, res)=> {
    if (err) {
      console.log(`No se pudo establecer la conexión con la base de datos ${config.dbName}` + err)
    } else {
      console.log(`Conectado a la base de datos ${config.dbName}`);
    }
  
    app.listen(config.PORT, ()=> {
      console.log(`Conexión con el servidor establecida en el puerto: ${config.PORT}`);
    })
  })
  
  
  module.exports= {app}
  
  
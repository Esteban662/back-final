const mongoose = require('mongoose');

const sucursalSchema =  new mongoose.Schema({

    nombre: String,
    imgUrl: String,
    direccion: String,
    horario: String,
    telefono: Number,
    email: String
   
  })


const sucursalModel = mongoose.model('stores', sucursalSchema);

module.exports = sucursalModel;
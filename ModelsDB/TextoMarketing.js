const mongoose = require('mongoose');

const TextoMarketingSchema =  new mongoose.Schema({
    descripcion: String,
    texto: String
})
 
const TextoMarketingModel = mongoose.model('textos', TextoMarketingSchema);

module.exports = TextoMarketingModel;
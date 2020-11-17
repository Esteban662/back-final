const mongoose = require('mongoose');

const TextoMarketingSchema =  new mongoose.Schema({
    texto: String
})
 
const TextoMarketingModel = mongoose.model('texto-marketing', TextoMarketingSchema);

module.exports = TextoMarketingModel;
const mongoose = require('mongoose');

const TextoMarketingSchema =  new mongoose.Schema({
    texto: String
})
 
const TextoMarketingModel = mongoose.model('TextoMarketing', TextoMarketingSchema);

module.exports = TextoMarketingModel;
const mongoose = require('mongoose');

const RedesSocialesSchema =  new mongoose.Schema({
    link: String,
    imgUrl: String
})
 
const RedesSocialesModel = mongoose.model('RedesSociales', RedesSocialesSchema);

module.exports = RedesSocialesModel;
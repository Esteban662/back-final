const mongoose = require('mongoose');

const RedesSocialesSchema =  new mongoose.Schema({
    link: String,
    imgUrl: String
})

module.exports= mongoose.model('redes-sociales', RedesSocialesSchema);
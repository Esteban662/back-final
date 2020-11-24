const mongoose = require('mongoose');

const newCategorySchema =  new mongoose.Schema({
    
    categoria: String,
  })


const newCategoryModel = mongoose.model('new-categories', newCategorySchema);

module.exports = newCategoryModel;
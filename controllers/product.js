const productModel = require('../modelsDB/Product');
const Product = require('../modelsDB/Product');


function getAllProducts(req,res) {

  Product.find().then((productFinded)=>{
    console.log(productFinded)
    return res.status(200).send(productFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}






module.exports= {
    getAllProducts,
  
  }
  
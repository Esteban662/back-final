const Product = require('../modelsDB/Product');


function getAllProducts(req,res) {

  Product.find({}, (err, product)=> {
    if(err) return res.status(500).send({message: 'Error al ejecutar la petición.'})
    if(!products) return res.status(404).send({message: 'No hay productos cargados.'})

    res.status(200).send({product})
  })
}

     





module.exports= {
    getAllProducts,
  
  }
  
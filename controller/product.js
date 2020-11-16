const productModels = require('../modelsDB/Product');
const Product = require('../modelsDB/Product');


function getAllProducts(req,res) {

  Product.find().then((productFinded)=>{
    console.log(productFinded)
    return res.status(200).send(productFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

// realizaré un switch, algo similar con lo que hicimos en el front para de manera aleatoria salieran los cupones.
    //asi funciona hacerlo generico.

function getProductLiving(req, res) {
  const Categoria= req.params.categoria

  Product.findOne({Categoria:living}, (err, product)=> {
    if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
    if (!product) return res.status(404).send({messagge:`No se ha encontrado `})

    res.status(200).send({product})

  })
}




module.exports= {
    getAllProducts,
    getProductLiving
  
  }
  
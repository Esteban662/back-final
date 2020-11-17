// const productModels = require('../ModelsDB/Product');
const Product = require('../ModelsDB/Product');
console.log(Product);

function getAllProducts(req,res) {

  Product.find().then((productFinded)=>{
    return res.status(200).send(productFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

// Funcion para buscar por categoria


function getProductCategory(req, res) {
  const categ= req.params.categoria

  Product.find({categoria: categ }, (err, product)=> {
    if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
    if (!product) return res.status(404).send({messagge:`No se ha encontrado `})

    res.status(200).send({product})
  })
}





module.exports= {
    getAllProducts,
    getProductCategory

  }
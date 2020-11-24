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

    res.status(200).send(product)
  })
}

// Funcion para buscar por producto => indica la subcategoria como cama, silla, etc..

function getProductClass(req, res) {
  const prod= req.params.producto

  Product.find({producto: prod }, (err, product)=> {
    if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
    if (!product) return res.status(404).send({messagge:`No se ha encontrado `})

    res.status(200).send({product})
  })
}

//Get by id

function getProductById(req,res){
  const ID = req.params.id

  Product.findById(ID).then((productFinded)=>{
    if(productFinded){
      return res.status(200).send(productFinded)
    }else{
      return res.status(200).send({"Not Founded": "404"})
    }
  }).catch((err)=>{return res.status(500).send({"error":err})})

}


module.exports= {
    getAllProducts,
    getProductCategory,
    getProductClass,
    getProductById
  }
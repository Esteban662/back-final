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

//buscar producto por ' id'

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



// Buscar productos incluyendo mayuscula

/*function getProduct(req, res){
  const producto = req.params.producto[0].toUppercase() + req.params.producto.slice(1)

  Product.find({producto:producto})
  .then((productoFinded)=> {
    console.log({producto:productoFinded})
    if(!productoFinded) {
      return res.status(404).send({"Not Finded": `404 ${req.params.producto} Not Finded`})
    }else{
      return res.status (200).send(productoFinded)
    }
    
  }).catch((err) =>{
    console.log({"Error": err})
    return res.status (500).send({"Error": err})
  })
}*/

function getProduct(req, res){

const product = req.params.producto[0].toUpperCase() + req.params.producto.slice(1)

    Product.find({ producto: product })
        .then((productFinded) => {
            console.log({ "Producto": productFinded })
            if (!productFinded) {
                return res.status(404).send({ "Not Finded": `404 ${req.body.producto} Not Finded` })
            }else{
                return res.status(200).send(productFinded)
            }
            }).catch((err) =>{
            console.log({ "Error": err })
            return res.status(500).send({ "Error": err })
    });
} 


module.exports= {
    getAllProducts,
    getProductCategory,
    getProductClass,
    getProductById,
    getProduct

}
const Product = require('../modelsDB/Product');


function getAllProducts(req,res) {

  Product.find({}, (err, product)=> {
    if(err) return res.status(500).send({message: 'Error al ejecutar la petición.'})
    if(!products) return res.status(404).send({message: 'No hay productos cargados.'})

    res.status(200).send({product})
  })
}
function getByCategory (req,res) {
  let ONE=
Product.findOne


}
app.get('/productos/:id',function(req,res){
  let ID = req.params.id
  Producto.findById(ID).then(function(producto){
      return res.status(200).send({producto:producto})
  })
})





module.exports= {
    getAllProducts,
  
  }
  
const Sucursal = require('../ModelsDB/Sucursales');
console.log(Sucursal);

function getAllStores(req,res) {

  Sucursal.find().then((storeFinded)=>{
    return res.status(200).send(storeFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

module.exports= {
    getAllStores
}
const FavoriteProduct = require('../ModelsDB/ProductsFav');
console.log(FavoriteProduct);

function getAllFavoriteProducts(req,res) {

  FavoriteProduct.find().then((productFinded)=>{
    return res.status(200).send(productFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

function getFavById(req,res){
  const ID = req.params.id

  FavoriteProduct.findById(ID).then((productFinded)=>{
    if(productFinded){
      console.log(productFinded)
      return res.status(200).send(productFinded)
    }else{
      return res.status(200).send({"Not Founded": "404"})
    }
  }).catch((err)=>{return res.status(500).send({"error":err})})

}
module.exports= {
    getAllFavoriteProducts,
    getFavById
}
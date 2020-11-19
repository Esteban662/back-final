const FavoriteProduct = require('../ModelsDB/ProductsFav');
console.log(FavoriteProduct);

function getAllFavoriteProducts(req,res) {

  FavoriteProduct.find().then((productFinded)=>{
    return res.status(200).send(productFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

module.exports= {
    getAllFavoriteProducts
}
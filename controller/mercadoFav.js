const mercadopago = require('mercadopago')
const ProductsFav = require('../ModelsDB/ProductsFav')

function mercadoFav(req, res) {
    const ID = req.params.id

    ProductsFav.findById(ID).then((productFinded) => {
        let preference = {
            items:[
                {
                    title:productFinded.producto,
                    unit_price: productFinded.precio,
                    quantity:1
                }
            ]
        }
        mercadopago.preferences.create(preference)
        .then((response)=>{
            return res.status(200).send({ init_point: response.body.init_point })
        }).catch((err)=>{
            console.log("Error", err)
            return res.status(500).send({ "Error": err })
        })
    }).catch((err)=>{
        console.log("Error afuera", err)
        return res.status(500).send({"error":err})
    })
    
}

module.exports = {
    mercadoFav
}
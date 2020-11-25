const mercadopago = require('mercadopago')

function mercadoPago(req,res) {
    let preference = {
        items: [
            {
                title:"Producto",
                unit_price:100,
                quantity:1
            }
        ]
    }
    
    mercadopago.preferences.create(preference)
    .then((response)=>{
        return res.status(200).send({init_point:response.body.init_point})
    }).catch((err)=>{
        console.log("Error", err)
        return res.status(500).send({"Error":err})})
}

module.exports={
    mercadoPago
}
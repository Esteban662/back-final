const images = require('../modelsDB/Images');


function getAllImages (req, res) {

  images.find({}, (err, images)=>{
    if(err) return res.status(500).send({message: 'Error al realizar la petición.'})
    if(!images) return res.status(404).send({message: 'No hay imagenes guardadas'})

    res.status(200).send({images});
  })

}
module.exports={
    getAllImages
  }
  
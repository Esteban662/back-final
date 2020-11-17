const SocialMedia= require( '../ModelsDB/RedesSociales.js');


function getAllSocialMedia(req,res) {

  SocialMedia.find({}).then((mediaFinded)=>{
    return res.status(200).send(mediaFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

function addSocialMedia (req, res) {
    const media= new SocialMedia();

    media.link= req.body.link;
    media.imgUrl= req.body.imgUrl;


    media.save((err, mediaStored)=>{
      if(err) res.status(500).send({message: "Error al guardar el mensaje\n"+err})

      res.status(200).send({media: mediaStored});
    })



}



module.exports={
  getAllSocialMedia,
  addSocialMedia
}

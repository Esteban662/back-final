const Email= require('../ModelsDB/Emails');

function setEmailData(req, res) {
  const suscrib= new Email();
  const {email, name}= req.body;

  suscrib.email = email;
  suscrib.name = name;

  user.save((err, emailStored)=> {
    if(err) return res.status(500).send({message: 'Error al ejecutar la petición.'});

    res.status(200).send({emailStored})
  })

  }

  module.exports={
    setEmailData,
  }

const Email= require('../modelsDB/Emails');

function setEmailData(req, res) {
  const suscrib= new Email();
  const {token,email}= req.body;

  suscrib.email = email;
  suscrib.token = token;

  user.save((err, emailStored)=> {
    if(err) return res.status(500).send({message: 'Error al ejecutar la petición.'});

    res.status(200).send({emailStored})
  })

  }

  module.exports={
    setEmailData,
  }

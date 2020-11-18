function contactValidate(req, res, next) {
    const newContact= req.body
    const inputs= ['name', 'email', 'phone', 'message']
  
    for (elem of inputs) {
      if( !newContact.hasOwnProperty(elem)) return res.status(404).send({message: `Se deben completar todos los campos. Falta: ${elem}`})
    }
  
    next()
  }

  function emailValidate(req, res, next) {
    const newEmail= req.body
    const inputs= ['email']
  
    for (elem of inputs) {
      if( !newEmail.hasOwnProperty(elem)) return res.status(404).send({message: `Se deben completar todos los campos. Falta: ${elem}`})
    }
  
    next()
  }
  

  module.exports= {
    contactValidate,
    emailValidate
  }
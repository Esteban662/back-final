const Contact = require('../ModelsDB/Contacts');

function setContact(req, res) {
    const contact= new Contact()
  
    const {name, email, phone, subject, message}= req.body;
  
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    contact.subject = subject;
    contact.message = message;
  
    contact.save((err, contactStored)=>{
      if(err) return res.status(500).send({message: 'Error al ejecutar la petición.'})
      res.status(200).send({contact});
    })
  }
  
  function getContacts(req, res) {
  
    Contact.find({}, (err, contacts)=> {
      if(err) return res.status(500).send({message: 'Error al ejecutar la petición.'})
  
      res.status(200).send({contacts})
    })
  }
  
  
  module.exports={
    setContact,
    getContacts,
  }
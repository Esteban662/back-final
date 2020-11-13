const textoMarketing = require('../modelsDB/TextoMarketing');

function getText(req,res){
    textoMarketing.find().then((TextFinded)=>{
        console.log(TextFinded)
        return res.status(200).send(TextFinded)
    })
}



module.exports= {
    getText
  }
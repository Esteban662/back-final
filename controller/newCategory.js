const NuevaCategoria = require('../ModelsDB/NewCategory');
console.log(NuevaCategoria);


// Para Encontrar todas las categorias

function getAllCategories(req,res) {

NuevaCategoria.find().then((categoriaFinded)=>{
    return res.status(200).send(categoriaFinded)
  }).catch((err)=>{
    return res.status(500).send({err})
  })
}

// Pare Encontrar Una sola categoria 

function getNewCategory(req, res) {
    const categ= req.params.categoria
    
    NuevaCategoria.find({categoria: categ }, (err, categoria)=> {
      if (err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
      if (!categoria) return res.status(404).send({messagge:`No se ha encontrado `})
  
      res.status(200).send(categoria)
    })
  }





module.exports= {
    getAllCategories,
    getNewCategory

  }

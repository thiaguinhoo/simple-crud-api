/* eslint-disable prettier/prettier */
const { StatusCodes } = require('http-status-codes');
const db = require("../models");



module.exports = {
  all: async (_, response) => {
    const list = await  db.Todos.findAll()
    response.json({list})
    response.sendStatus(StatusCodes.OK);
  },
  
  ListandoUmaLista: (request,response ) => {
    const id = parseInt(request.params.id)
    if (Number.isNaN(id)) return response.status(400).end();
    db.Todos.findByPk(id).then(()=>{
      response.sendStatus(StatusCodes.OK);
    })
  },


  criarLista: async (request, response) =>{
    let categoria = request.body.categoria
    let user = request.body.user
    if(categoria != undefined){
      db.Todos.create({
                    Categoria: categoria,
                    UserId: user
                    
            }).then(()=>{
              response.sendStatus(StatusCodes.CREATED);
            })
    }else{
      response.json({error: 'Dados não enviados'})
    }
    
  
  },
  
  
  

  deletarLista: async(request,response)=>{
    const id = parseInt(request.params.id);
    if (Number.isNaN(id)) return response.status(400).end();
   
    db.Todos.destroy({
     where: {id}
    }).then(() => {
     response.status(204).end();
    });
   },
  



  atualizarTituloLista: async(request,response)=>{
      let id = request.params.id
      let tituloEdit = request.body.titulo
      db.Todos.update({titulo: tituloEdit},{
        where:{
                id:id
        }
}).then(()=>{
        response.sendStatus(StatusCodes.OK);
})

      }

  
    }




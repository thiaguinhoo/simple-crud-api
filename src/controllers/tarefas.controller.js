/* eslint-disable prettier/prettier */
const { StatusCodes } = require('http-status-codes');
const db = require("../models");



const User = require('../models/User')





module.exports = {
  listandoTarefas: async (_, response) => {
    const list = await  db.Tarefa.findAll()
    response.json({list})
    response.sendStatus(StatusCodes.OK);
  },

  listandoTodosList: async(_, response)=>{
    db.Tarefa.findAll({
        include:[
               
                {model:User}
        ]
    }).then(list =>{
        response.json({list})
    })
      

  },

  


  criarTarefa: async (request, response) =>{
    let titulo = request.body.titulo  
    let descricao = request.body.descricao;
    let user = request.body.user
    let todo = request.body.todo
    let done = request.body.done
    if(descricao != undefined){
      db.Tarefa.create({
                    titulo: titulo,   
                    descricao: descricao,
                    done: done,
                    todoId: todo,
                    userId: user
                    
            }).then(()=>{
              response.sendStatus(StatusCodes.CREATED);
            })
    }else{
      response.json({error: 'Dados não enviados'})
    }
    
  
  },
  deletarTarefa: async(request,response)=>{
    const id = parseInt(request.params.id);
    if (Number.isNaN(id)) return response.status(400).end();
   
    db.Tarefa.destroy({
         where: {id}
        }).then(() => {
         response.status(204).end();
        });
    },
  



  atualizarLista: async(request,response)=>{
      let id = request.params.id
      let titulo = request.body.titulo
      let descricaoEdit = request.body.descricao
      let done = request.body.done
      let todo = request.body.todo
      let user = request.body.user
      db.Tarefa.update({

        descricao: descricaoEdit,
        titulo: titulo,
        done: done,
        todoId: todo ,
        userId: user
    },{
        where:{
                id:id
        }
}).then(()=>{
        response.sendStatus(StatusCodes.OK);
})

      }

}
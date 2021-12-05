/* eslint-disable prettier/prettier */
const User = require('../models/User')
// eslint-disable-next-line no-unused-vars
const Todos = require('../models/Todos')
// eslint-disable-next-line no-unused-vars
const Tarefa = require('../models/Tarefas');
var bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes');

module.exports = {

    
    listarUsers: async (_, response) => {
                let users = await User.findAll()
                response.json({users})
                response.sendStatus(StatusCodes.OK);
      
    },

    criarUser: async (request, response) =>{
        let name = request.body.name
        let password = request.body.password
        if(password.length < 6){
            response.json({error: 'Password precisa de mais de 6 dígitos'})
        }

        else if(name != undefined && password != undefined){
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(password,salt)
            User.create({
                        name: name,
                        password: hash
                        
                }).then(()=>{
                  response.sendStatus(StatusCodes.CREATED);
                })
        }else{
          response.json({error: 'Dados não enviados'})
        }
    },

    deletarUser: async(request,response)=>{
        const id = parseInt(request.params.id);
        if (Number.isNaN(id)) return response.status(400).end();
       
        User.destroy({
         where: {id}
        }).then(() => {
         response.status(204).end();
        }); 
       },


}
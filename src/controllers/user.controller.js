/* eslint-disable prettier/prettier */
const User = require('../models/User')
// eslint-disable-next-line no-unused-vars
const Todos = require('../models/Todos')
// eslint-disable-next-line no-unused-vars
const Tarefa = require('../models/Tarefas');
var bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes');

module.exports = {
    ListarUsers: async (_, response) => {
      const list = await  User.findAll()
      response.json({list})
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
    }

}
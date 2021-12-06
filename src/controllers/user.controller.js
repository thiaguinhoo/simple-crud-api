/* eslint-disable prettier/prettier */

const db = require("../models");

var bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes');

module.exports = {

    
    listarUsers: async (_, response) => {
                let users = await db.User.findAll()
                response.json({users})
                response.sendStatus(StatusCodes.OK);
      
    },

    criarUser: async (request, response) =>{
        let username = request.body.username
        let password = request.body.password
        if(password.length < 6){
            response.json({error: 'Password precisa de mais de 6 dígitos'})
        }

        else if(username != undefined && password != undefined){
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(password,salt)
            db.User.create({
                        username: username,
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
       
        db.User.destroy({
         where: {id}
        }).then(() => {
         response.status(204).end();
        }); 
       },

  
       


}
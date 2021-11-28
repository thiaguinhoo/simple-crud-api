/* eslint-disable prettier/prettier */
const sequelize = require('sequelize')
const connection = require('../database/database')




const Tarefas = connection.define('tarefas',{
    tarefa:{
        type: sequelize.STRING,
        completa: false,
        allowNull:false
    },
   

    
       
    
    
})


Tarefas.sync({
    force: true
});
module.exports = Tarefas;
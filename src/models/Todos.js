/* eslint-disable prettier/prettier */
const sequelize = require('sequelize')
const connection = require('../database/database');
const Tarefas = require('./Tarefas');




const Todos = connection.define('todos',{
    titulo: {
        type: sequelize.STRING,
        
    }    
    
    
})



Todos.hasMany(Tarefas)// Uma Lista tem várias listas de tárefas
Tarefas.belongsTo(Todos)//Uma  tarefa pertence a uma lista 
module.exports = Todos;
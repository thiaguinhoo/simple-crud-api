/* eslint-disable prettier/prettier */
const sequelize = require('sequelize')
const connection = require('../database/database');
const Tarefas = require('./Tarefas');




const Todos = connection.define('todos',{
    lista:{
        type: sequelize.STRING,
        allowNull:false
    },
  
        timestamps: false
    
    
})


Todos.sync({
    force: true
});
Todos.hasMany(Tarefas)// Um Lista tem várias listas de tárefas
Tarefas.belongsTo(Todos)//Uma  tarefa pertence a uma lista 
module.exports = Todos;
/* eslint-disable prettier/prettier */
const sequelize = require('sequelize')
const connection = require('../database/database');
const Tarefas = require('./Tarefas');
// eslint-disable-next-line no-unused-vars
const todos = require('./Todos')


const User = connection.define('user',{
    name:{
        type: sequelize.STRING,
        allowNull:false,
        
    },
    password:{
        type: sequelize.STRING,
        allowNull: false,
        
       
    }
         
    
        
    
})

User.hasMany(todos)// Um User tem várias listas de tárefas
todos.belongsTo(User)//Uma  lista todo pertence a um User





module.exports = User;
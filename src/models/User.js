/* eslint-disable prettier/prettier */
const sequelize = require('sequelize')
const connection = require('../database/database')
// eslint-disable-next-line no-unused-vars
const todos = require('./todos')


const User = connection.define('user',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: sequelize.STRING,
        allowNull:false
    },
    password:{
        type: sequelize.STRING,
        allowNull: false
        
    },
    timestamps: false
    
    
})
User.hasMany(todos)// Um User tem várias listas de tárefas
todos.belongsTo(User)//Uma  lista todo pertence a um User 




module.exports = User;
/* eslint-disable prettier/prettier */
const sequelize = require('sequelize')
const connection = require('../database/database')

const Todos = connection.define('todos',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },tarefa:{
        type:sequelize.STRING,
        allowNull: false
    }
})


module.exports = Todos;
const sequelize = require('sequelize');
const connection = require('../database/database');

const Tarefas = connection.define('tarefas', {
  tarefa: {
    type: sequelize.STRING,
    completa: false,
    allowNull: false,
  },
});

module.exports = Tarefas;

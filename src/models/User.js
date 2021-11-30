const sequelize = require('sequelize');
const connection = require('../database/database');
// eslint-disable-next-line no-unused-vars
const Tarefas = require('./Tarefas');
const todos = require('./Todos');

const User = connection.define('user', {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(todos); // Um User tem várias listas de tárefas
todos.belongsTo(User); //Uma  lista todo pertence a um User

module.exports = User;

const express = require('express');
const todosRoutes = require('./routes/todos.routes');

const application = express();

application.use('/todos', todosRoutes);

module.exports = application;

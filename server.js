/* eslint-disable prettier/prettier */
const express = require('express');
const todosRoutes = require('./src/routes/todos.routes');

const application = express();

application.use('/todos', todosRoutes);


application.listen(8080,()=>{
    console.log('Application rodando!')
})
module.exports = application;

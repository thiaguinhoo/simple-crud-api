/* eslint-disable prettier/prettier */
const express = require('express');
const todosRoutes = require('./src/routes/todos.routes');
const connection = require('./src/database/database')
const application = express();



connection 
        .authenticate()
        .then(()=>{
            console.log("Db connectado"); 
        }).catch((error) => {
            console.log(error)      
        })




application.use(express.urlencoded({extended:false}));
application.use(express.json());
application.use(express.static('public'))

     


application.use('/todos', todosRoutes);


application.listen(8080,()=>{
    console.log('Application rodando!')
})


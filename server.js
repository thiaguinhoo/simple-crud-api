/* eslint-disable prettier/prettier */
const express = require('express')
const apiRoutes = require('./src/routes/routes')
const connection = require('./src/database/database')
const app = express();





connection 
        .authenticate()
        .then(()=>{
            console.log("Db connectado"); 
        }).catch((error) => {
            console.log(error)      
        })



app.use(express.json());        
app.use(express.urlencoded({ extended: true }));


     


app.use('/',apiRoutes);




app.listen(8080,()=>{
    console.log('Application rodando!')
})


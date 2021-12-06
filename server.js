/* eslint-disable prettier/prettier */
const express = require('express')
const apiRoutes = require('./src/routes/routes')
const app = express();


const PORT = process.env.PORT || 8080;
const db = require("./src/models");



app.use(express.json());        
app.use(express.urlencoded({ extended: true }));


     


app.use('/',apiRoutes);




db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`listening at http://localhost:${PORT}`);
    });

});
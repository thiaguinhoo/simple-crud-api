/* eslint-disable prettier/prettier */
const sequelize = require("sequelize");


const connection = new sequelize('todo','root','root',{
        host: 'localhost',
        dialect: 'mysql'
        });


module.exports = connection ;
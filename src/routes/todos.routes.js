/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos.controller');



router.get("/ping",(req,res) =>{
    res.json({pong:true})
})

router.route('/').get(todosController.all);

router.route('/new').post(todosController.criarLista)

router.route('/delete/:id',todosController.deletarLista)

module.exports = router;

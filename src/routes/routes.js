/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos.controller');
const userController = require('../controllers/user.controller')

//PING ROUTER
router.get("/ping",(req,res) =>{
    res.json({pong:true})
})


//TODOS ROUTES
router.route('/todos').get(todosController.all);

router.get('/:id',todosController.ListandoUmaLista)

router.route('/').post(todosController.criarLista)

router.delete('/todos/:id',todosController.deletarLista)

router.put('/todos/:id',todosController.atualizarTituloLista )




//USER ROUTES

router.get('/users').get(userController.ListarUsers);
router.post('/users',userController.criarUser )





module.exports = router;

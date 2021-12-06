/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')
const tarefasController = require('../controllers/tarefas.controller')
const todosController = require('../controllers/todos.controller');
//PING ROUTER
router.get("/ping",(req,res) =>{
    res.json({pong:true})
})

//USER ROUTES

router.get('/users',userController.listarUsers)
router.post('/users',userController.criarUser )

router.delete('/users/:id',userController.deletarUser)



//TODOS ROUTES
router.route('/todos').get(todosController.all);

router.get('/:id',todosController.ListandoUmaLista)

router.route('/todos').post(todosController.criarLista)
router.put('/todos/:id',todosController.atualizarTituloLista )


//TAREFA ROUTES

router.route('/tarefas').get(tarefasController.listandoTarefas);

router.get('/tarefas',tarefasController.listandoTodosList)

router.post('/tarefas',tarefasController.criarTarefa)

router.delete('/tarefas/:id',tarefasController.deletarTarefa)

router.put('/tarefas/:id',tarefasController.atualizarLista )


module.exports = router;

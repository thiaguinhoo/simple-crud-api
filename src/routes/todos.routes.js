const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

router.get('/ping', (req, res) => {
  res.json({ pong: true });
});

router.route('/').get(todosController.all);

router.get('/:id', todosController.ListandoUmaLista);

router.route('/').post(todosController.criarLista);

router.delete('/:id', todosController.deletarLista);

router.put('/:id', todosController.atualizarTituloLista);

module.exports = router;

const { Router } = require('express');
const todosController = require('../controllers/todos.controller');

const router = Router();

router.route('/').get(todosController.all);

module.exports = router;

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Ensure all controller methods are defined and assigned correctly
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;

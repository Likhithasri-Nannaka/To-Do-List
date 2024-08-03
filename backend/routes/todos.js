// backend/routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { title, userId } = req.body;
  const todo = new Todo({
    title,
    userId
  });

  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create to-do item' });
  }
});

router.get('/', async (req, res) => {
  const { userId } = req.query;

  try {
    const todos = await Todo.find({ userId });
    res.json(todos);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch to-do items' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update to-do item' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'To-do item deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete to-do item' });
  }
});

module.exports = router;

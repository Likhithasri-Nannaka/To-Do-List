import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteTodo from './DeleteTodo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:10000/api/todos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className="todo-item">
            <span className="todo-title">{todo.title} {todo.completed ? '(Completed)' : ''}</span>
            <div className="todo-actions">
              <Link className="edit-todo-link" to={`/update-todo/${todo._id}`}>Edit</Link>
              <DeleteTodo id={todo._id} />
            </div>
          </li>
        ))}
      </ul>
      <Link className="add-todo-link" to="/add-todo">Add New items</Link>
      <button className="dashboard-button" onClick={handleGoToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default TodoList;

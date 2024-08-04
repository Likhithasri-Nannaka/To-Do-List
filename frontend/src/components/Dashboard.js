import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodoClick = () => {
    navigate('/add-todo');
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button className="add-todo-button" onClick={handleAddTodoClick}>Add items</button>
      <h2>My To-Do List</h2>
      <ul className="dashboard-todo-list">
        {todos.map(todo => (
          <li key={todo._id} className="dashboard-todo-item">
            {todo.title} {todo.completed ? '(Completed)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

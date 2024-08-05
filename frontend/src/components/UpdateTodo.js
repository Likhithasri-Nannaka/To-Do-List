import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ title: '', completed: false });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(`https://to-do-list-1-i7w0.onrender.com/api/todos/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Todo not found');
        }
        const data = await response.json();
        setTodo({
          title: data.title,
          completed: data.completed,
        });
      } catch (error) {

      }
    };

    fetchTodo();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://to-do-list-1-i7w0.onrender.com/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      navigate('/todos');
    } catch (error) {
      console.error('Failed to update todo:', error);
      setError('Failed to update todo');
    }
  };

  return (
    <div>
      <h2>Update To-Do</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Re-Edit:</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Completed:</label>
          <input
            type="checkbox"
            name="completed"
            checked={todo.completed}
            onChange={(e) =>
              setTodo({ ...todo, completed: e.target.checked })
            }
          />
        </div>
        <button type="submit">Update To-Do</button>
      </form>
    </div>
  );
};

export default UpdateTodo;

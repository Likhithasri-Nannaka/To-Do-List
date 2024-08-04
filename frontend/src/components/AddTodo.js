import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTodo.css';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:10000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ title, userId: 'userId123' }), // Use actual userId
      });
      if (response.ok) {
        navigate('/todos');
      } else {
        alert('Failed to add To-Do');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="addtodo-container">
      <h2>Add items</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;

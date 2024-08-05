import React from 'react';

const DeleteTodo = ({ id }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://to-do-list-1-i7w0.onrender.com/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        alert('To-Do deleted successfully');
        window.location.reload(); // Refresh the list
      } else {
        alert('Failed to delete To-Do');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteTodo;

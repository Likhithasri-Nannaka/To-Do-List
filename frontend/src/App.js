import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/Todo';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/add-todo" element={<AddTodo />} />
      <Route path="/update-todo/:id" element={<UpdateTodo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

// src/App.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import TodoList from './ToDoList';
import TodoDetails from './ToDoDetails';
import Homepage from './HomePage';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const initialUsers = [
      { username: 'user1', password: 'pass1' },
      { username: 'user2', password: 'pass2' },
      { username: 'user3', password: 'pass3' }
    ];
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(initialUsers));
    }
  }, []);

  const handleLogin = user => {
    setUser(user);
    setCurrentPage('todos');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const handleSelectTodo = todo => {
    setSelectedTodo(todo);
  };

  const handleUpdateTodo = updatedTodo => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const updatedTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setSelectedTodo(null);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme} w-screen m-0 p-0`}>
      <button
        onClick={toggleTheme}
        title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-md"
      >
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
      {currentPage === 'home' && <Homepage onNavigate={setCurrentPage} theme={theme} />}
      {currentPage === 'login' && !user && <Login onLogin={handleLogin} theme={theme} />}
      {currentPage === 'todos' && user && !selectedTodo && <TodoList onAdd={() => {}} onSelect={handleSelectTodo} onLogout={handleLogout} theme={theme} />}
      {currentPage === 'todos' && user && selectedTodo && <TodoDetails todo={selectedTodo} onUpdate={handleUpdateTodo} onBack={() => setSelectedTodo(null)} theme={theme} />}
    </div>
  );
};

export default App;

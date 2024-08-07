// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin, theme }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className={`w-full max-w-md p-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-md`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={`w-full p-3 mb-4 border ${theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`w-full p-3 mb-4 border ${theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

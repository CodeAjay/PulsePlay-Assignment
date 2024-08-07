// src/components/Homepage.js
import React from 'react';

const Homepage = ({ onNavigate, theme }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className={`max-w-xl p-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-md text-center`}>
        <h1 className={`text-4xl font-bold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Welcome to the To-Do App</h1>
        <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Manage your tasks efficiently with our simple and intuitive To-Do application.</p>
        <p className={`text-lg mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Features include:</p>
        <ul className={`list-disc list-inside text-left mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
          <li>User Login/Logout</li>
          <li>Adding, Viewing, Editing, and Deleting To-Dos</li>
          <li>Marking To-Dos as done</li>
          <li>Responsive design</li>
        </ul>
        <button
          onClick={() => onNavigate('login')}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;

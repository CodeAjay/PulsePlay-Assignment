import React, { useState } from 'react';

const TodoDetails = ({ todo, onUpdate, onBack, theme }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = () => {
    onUpdate({ ...todo, title, description });
    onBack();
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-8`}>
      <div className={`max-w-2xl mx-auto ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-md p-6`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Edit Todo</h2>
          <button
            onClick={onBack}
            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Back
          </button>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={`w-full p-3 mb-4 border ${theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={`w-full p-3 mb-4 border ${theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update To-Do
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;

import React, { useState, useEffect } from 'react';
import TodoItem from './ToDoItem';
import TodoDetails from './ToDoDetails'; // Ensure you import TodoDetails
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({ onAdd, onSelect, onLogout, theme }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [err, setErr] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const notifyAdd = () => toast.success('To-Do added successfully!');
  const notifyUpdate = () => toast.success('To-Do updated successfully!');
  const notifyDelete = () => toast.success('To-Do deleted successfully!');
  const notifyError = (message) => toast.error(message);

  const addTodo = () => {
    if (!title) {
      setErr('Title cannot be empty.');
      setTimeout(() => {
        setErr('');
      }, 3000);
    } else {
      const newTodo = { id: Date.now(), title, description, done: false };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setTitle('');
      setDescription('');
      notifyAdd(); // Notify on success
    }
  };

  const markAsDone = id => {
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    notifyUpdate(); // Notify on success
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    notifyDelete(); // Notify on success
  };

  const handleUpdate = (updatedTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    notifyUpdate(); // Notify on success
    setSelectedTodo(null); // Go back to the list view
  };

  const handleSelect = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} p-8`}>
      <div className={`max-w-2xl mx-auto ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-md p-6`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Todo List</h2>
          <div className='flex flex-row'>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300 mr-2"
            >
              Logout
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Back to Homepage
            </button>
          </div>
        </div>
        <ToastContainer />
        {selectedTodo ? (
          <TodoDetails
            todo={selectedTodo}
            onUpdate={handleUpdate}
            onBack={() => setSelectedTodo(null)}
            theme={theme}
          />
        ) : (
          <>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className={`w-full p-3 mb-4 border ${theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {err ? <p className='text-red-500 mb-4'>{err}</p> : ''}
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={`w-full p-3 mb-4 border ${theme === 'light' ? 'border-gray-300 bg-gray-100' : 'border-gray-700 bg-gray-700'} text-${theme === 'light' ? 'gray-900' : 'white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                onClick={addTodo}
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Add To-Do
              </button>
            </div>
            <ul>
              {todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onSelect={handleSelect}
                  onDelete={deleteTodo}
                  onMarkAsDone={markAsDone}
                  theme={theme}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;

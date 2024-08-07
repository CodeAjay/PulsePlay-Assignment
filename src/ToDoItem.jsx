import React from 'react';

const TodoItem = ({ todo, onSelect, onDelete, onMarkAsDone, theme }) => {
  return (
    <li className={`p-4 mb-4 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} rounded-md flex justify-between items-center`}>
      <div onClick={() => onSelect(todo)} className={`cursor-pointer ${todo.done ? 'line-through' : ''} text-${theme === 'light' ? 'gray-900' : 'white'}`}>
        {window.innerWidth <= 768 ? (
          // For mobile (<= 768px)
          <p>{todo.title.length > 15 ? `${todo.title.slice(0, 13)}...` : todo.title}</p>
        ) : (
          // For desktop (> 768px)
          <p>{todo.title.length > 40 ? `${todo.title.slice(0, 40)}...` : todo.title}</p>
        )}
      </div>
      <div>
        <button
          onClick={() => onMarkAsDone(todo.id)}
          className={`mr-2 ${todo.done ? 'bg-green-500' : 'bg-gray-500'} text-white p-2 rounded-md hover:${todo.done ? 'bg-green-600' : 'bg-gray-600'} transition duration-300`}
        >
          {todo.done ? 'Undone' : 'Done'}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

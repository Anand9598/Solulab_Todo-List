
import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  // State to store title and description of new task

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;

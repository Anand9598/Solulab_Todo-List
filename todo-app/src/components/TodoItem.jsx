
import React, { useState } from 'react';

const TodoItem = ({ task, index, editTask, deleteTask }) => {
  // State to manage whether the task is being edited

  const [isEditing, setIsEditing] = useState(false);

  // State to store the updated title and description

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(index, { title, description });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /> {" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </>
      )}
      {" "}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button> {" "}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;

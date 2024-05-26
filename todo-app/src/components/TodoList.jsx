
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;

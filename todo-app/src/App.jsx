
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBox from './components/SearchBox';


const App = () => {

//checking if local storage contains any tasks

  const stored_data = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

  // State to store the list of tasks

  const [tasks, setTasks] = useState(stored_data);

  // State to store the search term for filtering tasks

  const [searchTerm, setSearchTerm] = useState('');

 // Effect to update localStorage whenever the tasks state changes

  useEffect(() => {
    console.log("checking");
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  // Function to add task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  
  //Function to edit task

  const editTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  // Function to delete a task

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Filter tasks based on the search term

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Todo List</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoForm addTask={addTask} />
      <TodoList tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;

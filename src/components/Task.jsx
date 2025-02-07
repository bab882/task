import React, { useState, useEffect } from 'react';
import TaskInput from '../components/taskinput/TaskInput';
import TaskList from './tasklist/TaskList';

function Task({ setIncompletedTask }) {
  
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const incompletedCount = taskData.filter(task => !task.completed).length;
    setIncompletedTask(incompletedCount);
  }, [taskData, setIncompletedTask]);

  const addTask = (title) => {
    const newTask = {
      id: taskData.length ? taskData[taskData.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };

    setTaskData([...taskData, newTask]);
  };

  const editTask = (id, completedValue) => {
    setTaskData(
      taskData.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deletedTask = (id) => {
    setTaskData(taskData.filter((task) => task.id !== id));
  };

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="wrapper-header">
          <h1>My Todo</h1>
          <TaskInput addTask={addTask} />
        </div>
        <div className="task-list">
          <TaskList taskData={taskData} editTask={editTask} deletedTask={deletedTask} />
        </div>
      </div>
    </div>
  );
}

export default Task;

import React, { useState, useEffect } from 'react';
import TaskItems from '../taskitems/TaskItems';
import style from './TaskList.module.css';

function TaskList({ taskData, editTask, deletedTask,  notificationMessage }) {
  const [deletedMessage, setDeletedMessage] = useState(null);

  const handleDeletedTask = (taskId) => {
    deletedTask(taskId);
    setDeletedMessage("Tâche supprimée avec succès ✨");
  };

  const emptyMessage = !taskData || taskData.length === 0 ? "Votre liste est vide ✨" : null;

  const taskList = taskData.map((task) => (
    <TaskItems
      key={task.id}
      task={task}
      editTask={editTask}
      deletedTask={handleDeletedTask}
    />
  ));

  useEffect(() => {
    
    if (deletedMessage) {
      const timer = setTimeout(() => setDeletedMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [deletedMessage]);

  return (
    <div className={style.box}>
      <div className={style.contentBox}>
        <h3 className={style.title}>
          {deletedMessage || notificationMessage || emptyMessage}
        </h3>
      </div>
      
      {taskData && taskData.length > 0 && (
        <ul className={style.container}>
          {taskList}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

import React, { useState } from 'react'
import style from './TaskInput.module.css'

function TaskInput({addTask}) {

  const [taskData, setTaskData] = useState("");

  const handleInput = (event) => {
    setTaskData(event.target.value);
  }

  const handleTask = (event) => {
    event.preventDefault();
    if(taskData.trim()) {
      addTask(taskData);
      setTaskData("");
    }
    else {
      alert("Veuillez remplir votre tâche");
    }
  }

  return (
    <div className={style.container}>
      <form 
        onSubmit={handleTask}
        className={`${style.formInput}`}
      >
        <input
          onChange={handleInput}
          type="text" 
          className={`${style.input}`}
          value={taskData}
          placeholder="Ajoute une Liste"
        />
        <button className={style.buttonadd} type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}

export default TaskInput

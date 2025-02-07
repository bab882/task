import React from 'react'
import style from './TaskItems.module.css'

function TaskItems({task, editTask, deletedTask}) {

  return (
    <li
      onClick={() => editTask(task.id, !task.completed) }
      className={`${style.container} ${task?.completed ? style.success : style.default}`}
    >
      <div className={style.item}>
        <div className={`${style.id} ${task?.completed ? style.idSuccess : style.idDefault}`}>
          {task.id}
        </div>
        <div className={task?.completed ? style.contentSuccess : style.contentDefault}>
          {task.title}
        </div>
      </div>
      <button 
        onClick={(event) => {
          event.stopPropagation()
          deletedTask(task.id)
        }}
        className={style.buttonDelete}>
        <i className="fa-solid fa-trash" id={style.trash}></i>
      </button>
    </li>
  )
}

export default TaskItems

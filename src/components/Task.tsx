import React from "react";

interface TaskProps {
  value: string,
  deleteTask: React.MouseEventHandler
}

const Task: React.FC<TaskProps> = props => {
  return(
      <div>
        <p className="task-box">{props.value}</p>
        <button className="delete-btn" onClick={props.deleteTask}></button>
      </div>

  )
}

export default Task;
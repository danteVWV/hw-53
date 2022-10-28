import React from "react";

interface AddTaskProps {
  inputValue: React.ChangeEventHandler;
  addBoxClick: React.MouseEventHandler;
}

const AddTaskForm: React.FC<AddTaskProps> = props => {
  return(
    <form>
      <input className="input-box" onChange={props.inputValue} type="text" placeholder="Add new task"/>
      <button className="add-btn" onClick={props.addBoxClick}>Add</button>
    </form>
  )
}

export default AddTaskForm;
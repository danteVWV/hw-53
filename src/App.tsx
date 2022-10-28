import React, {MouseEventHandler, useState} from 'react';
import "./components/form-style.css";
import AddTaskForm from "./components/addTaskForm";
import Task from "./components/Task";
import {ReactComponent} from "*.svg";


function App() {
  const [userTask, addUserTask] = useState<string[]>([]);
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userTask.push(event.target.value);
    addUserTask(userTask);
  }

  const [tasks, printTasks] = useState<string[]>(userTask)
  const printChange = (event: MouseEventHandler<HTMLButtonElement>) => {
    let tasks = [...userTask];
    const printTasks = (taskArr: string) => {
      return(
          <React.Fragment>
            <Task value={taskArr} deleteTask={}/>
          </React.Fragment>
      )
    })

    
  }

  return (
    <div className="App">
      <AddTaskForm inputValue={inputChange} addBoxClick={printChange}/>
    </div>
  );
}

export default App;

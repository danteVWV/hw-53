interface TaskFormProps {
  task: string
}

const AddTaskForm: React.FC<TaskFormProps> = props => {
  return(
      <form>
        <input className="input-box" type="text" value={props.task} placeholder="Add new task"/>
        <button className="add-btn">Add</button>
      </form>
  )
}

export default AddTaskForm;

import { useState } from "react";

function EditToDoForm(props){

    const editTodo = props.editTodo;
    const task = props.task;

    const [value, setValue] = useState(task.task);

    function taskHandler(event){
        setValue(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        editTodo(value, task.id);
        setValue("");

    }


    return(
        <form className="TodoForm" onSubmit={submitHandler}>
            <input 
            type="text"
            className="todo-input"
            placeholder="Update the task"
            onChange={taskHandler}
            value={value}
            />
            <button type="submit" className="todo-btn">
                Update Task
            </button>
        </form>
    );

}

export default EditToDoForm;
import { useState } from "react";

function ToDoForm(props){

    const addTask = props.addTask;

    const [value, setValue] = useState("");

    function taskHandler(event){
        setValue(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        if(value===""){
            return;
        }else{
            addTask(value);
        }
        setValue("");

    }


    return(
        <form className="TodoForm" onSubmit={submitHandler}>
            <input 
            type="text"
            className="todo-input"
            placeholder="Tasks of Today?"
            onChange={taskHandler}
            value={value}
            />
            <button type="submit" className="todo-btn">
                Add Task
            </button>
        </form>
    );

}

export default ToDoForm;
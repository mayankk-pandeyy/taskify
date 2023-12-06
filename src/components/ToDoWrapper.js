import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import { useState } from "react";

uuidv4();


function ToDoWrapper(){

    const [tasks, setTasks] = useState([]);

    function addTask(task){
        setTasks([...tasks, {id:uuidv4(), task:task, completed:false, isEditing:false}]);
        console.log(tasks);
    }

    function toggleComplete(id){
        setTasks(tasks.map((task)=> task.id? ({...task, completed:!task.completed}):(task)))
    }

    function deleteTodo(id){
        setTasks(tasks.filter((task)=> task.id !== id));
    }

    function editTodo(id){
        setTasks(tasks.map((task)=> (task.id === id? (
            {...task, isEditing: !task.isEditing}
        ):(task))))
    }

    function editTask(value, id){
        return setTasks(tasks.map((task)=> task.id === id? 
            {...task, value, isEditing: !task.isEditing}
        : task))
    }

    return(
        <div className="TodoWrapper">
            <h1 className="heading">Tasks To Do!</h1>
            <ToDoForm
                addTask={addTask}
            />
            {tasks.map((task, index)=>(
                task.isEditing ? (<EditToDoForm editTodo={editTask} task={task}/>):
                (<ToDo task={task} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
                )
            )}
        </div>
    );




}

export default ToDoWrapper;
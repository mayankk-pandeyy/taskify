import { MdAutoDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";


function ToDo(props){

    const task = props.task;
    const toggleComplete = props.toggleComplete;
    const deleteTodo = props.deleteTodo;
    const editTodo = props.editTodo;

    function deleteHandler(){
        return deleteTodo(task.id);
    }

    function editHandler(){
        return editTodo(task.id);
        
    }

    return(
        <div className="Todo">
            <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? "completed":"incompleted"}`}>
                {task.task}
            </p>
            <div className="icons">
                <GrEdit className="icon" onClick={editHandler}/>
                <MdAutoDelete className="icon" onClick={deleteHandler}/>
            </div>
        </div>
    );

}

export default ToDo;
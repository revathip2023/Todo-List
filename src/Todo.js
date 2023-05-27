import React,{ useState} from "react";
import CheckBox from "./CheckBox";
function Todo() {
    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask]=useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(newTask.trim()){
            setTasks([...tasks,newTask]);
            setNewTask('');
        }
    };

    const handleChange =(event) =>{
        setNewTask(event.target.value);

    };
    return(
        <div>
            <h1>
                TO-Do List 
            </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newTask} onChange={handleChange}/>
                    <button type="submit">Add Task</button>
                </form>
            <ul>
                {
                    tasks.map((task,index)=> (
                            <CheckBox label={task}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default Todo;
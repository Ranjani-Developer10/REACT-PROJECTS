import {useState} from "react";

function TodoTask(){
    const[task,setTask]=useState("")
    const[tasks,setTasks]=useState([])
    
    const addTask=()=>{
        if(task.trim() !==""){
            setTasks([...tasks,task]);
            setTask("")

        }
    }

    const deleteTask=(index)=>{
        const updateTasks=tasks.filter((_,i)=>i!==index)
        setTasks(updateTasks)

    }


    return(
        <>
        <h1>TODO TASK</h1>
        <input type="text" placeholder="addTask" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask}>ADD-Task</button>
        <h3>Total Tasks: {tasks.length}</h3>

     {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
        </>
    )
}

export default TodoTask;
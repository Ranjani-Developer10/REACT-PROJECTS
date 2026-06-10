import React,{useState} from "react";

function CounterApp(){
    const [count,setCount]= useState(0);
    return(
        <>
        <h1>CounterApp</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
}
export default CounterApp;
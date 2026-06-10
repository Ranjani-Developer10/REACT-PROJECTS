// Question 3: Student Grade System Create a form with: Student Name Mark Requirements: Mark >= 90 → Grade A Mark >= 75 → Grade B Mark >= 50 → Grade C Below 50 → Fail Display the result on screen.

import {useState} from "react"

function StudentMark(){

    const[studentName,setStudentName]=useState("")
    const[mark,setMark]=useState("")
    const[result,setResult]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();

    if(mark >= 90){
        setResult(`${studentName}-Grade-A`)
    }else if(mark >= 75){
        setResult(`${studentName}-Grade-B`)
    }else if(mark >= 50){
        setResult(`${studentName}-Grade-C`)
    }else{
        setResult(`${studentName}--Fail`)
    }


    }
    return(
        <>
        <h1>STUDENT RESULT</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="NAME" value={studentName} onChange={(e)=>setStudentName(e.target.value)}/>

            <input type="number" placeholder="MARK" value={mark} onChange={(e)=>setMark(e.target.value)}/>
            <button type="submit">GET RESULT</button>
        </form>
        <p>{result}</p>
        </>
    )
}
export default StudentMark;
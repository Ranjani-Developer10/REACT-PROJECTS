import { useState } from "react";

function LoginForm(){
    const [email,setEmail]=useState("")
    const [password,setPassword] =useState("")
    const [msg,setMsg]=useState("")

    const handleLogin=(e) => {
            e.preventDefault();
            if(email===""){
                setMsg("Email is Required")
            }else if(password.length<6){
                setMsg("Password something Wrong")
            }else{
                setMsg("Successfully Login")
            }
        }

    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
        <p>{msg}</p>
        
        
        </>
    )
}
export default LoginForm;